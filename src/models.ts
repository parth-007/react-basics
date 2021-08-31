export interface CounterInterface {
  count: number;
}

export interface HOCInterface extends CounterInterface {
    incrementCount: () => void
}

export interface NameInterface {
    name: string;
}

export interface User {
  name: string;
  age: number;
}

export interface UserSearchProps {
  users: User[];
}

export interface UserSearchState {
  name: string;
  user: User | undefined;
}

export interface ChildProps {
  id: number;
  color: string;
  onClick: () => void;
}

export interface Student {
  id: number;
  name: string;
}
