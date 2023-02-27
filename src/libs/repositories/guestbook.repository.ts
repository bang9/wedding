import type { RepositoryCreateParams } from './index';
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  setDoc,
  SnapshotOptions,
} from 'firebase/firestore';

export interface GuestbookRepository {
  list(): Promise<GuestbookModel[]>;
  upsert(model: GuestbookModel): Promise<GuestbookModel>;
  delete(id: string): Promise<void>;
}

export interface GuestbookModel {
  id: string;
  secretId: string;
  nickname: string;
  message: string;
  createdAt: number;
}

export const createGuestbookRepository = ({ firebase }: RepositoryCreateParams): GuestbookRepository => {
  const guestbookCollection = collection(firebase.db, 'guestbook').withConverter(converter);
  const guestbookDoc = doc(guestbookCollection);

  return {
    async delete(id: string): Promise<void> {
      const itemDoc = doc(guestbookDoc, id);
      await deleteDoc(itemDoc);
    },
    async list(): Promise<GuestbookModel[]> {
      const snapshot = await getDocs<GuestbookModel>(guestbookCollection);
      return snapshot.docs.map((doc) => doc.data());
    },
    async upsert(model: GuestbookModel): Promise<GuestbookModel> {
      const itemDoc = doc(guestbookDoc, model.id);
      await setDoc(itemDoc, model);

      return model;
    },
  };
};

const converter = {
  toFirestore(data: GuestbookModel): DocumentData {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<Omit<GuestbookModel, 'id'>>, options: SnapshotOptions): GuestbookModel {
    return { id: snapshot.id, ...snapshot.data(options) };
  },
};
