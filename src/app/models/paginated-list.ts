export interface PaginatedList<T> {
    data: T[];
    pageSize: number;
    pageIndex: number;
    count: number;
    lastPage: number;
  }