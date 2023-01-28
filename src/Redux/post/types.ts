export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
};

export type Posts = {
  id: string;
  title: string;
  discription: string;
  viewsCount: number;
  imageUrl: string;
  user_published: any;
}

export interface PostsSliceState {
  items: Posts[];
  status: Status;
}