
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    health(): Nullable<string> | Promise<Nullable<string>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
}

export interface IMutation {
    createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: string, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
