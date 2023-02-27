import { createGuestbookRepository, GuestbookRepository } from './guestbook.repository';
import { firebase } from '../firebase';
export interface Repositories {
  guestbook: GuestbookRepository;
}

export interface RepositoryCreateParams {
  firebase: typeof firebase;
}

export const repositories: Repositories = {
  guestbook: createGuestbookRepository({ firebase }),
};
