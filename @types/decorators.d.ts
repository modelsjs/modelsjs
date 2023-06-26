type MemberPlacement = 'static' | 'own' | 'prototype';

type MemberDescriptor = {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
};

type ClassDescriptor = {
    kind: 'class';
    elements: (FieldDescriptor | MethodDescriptor)[];
};

type FieldDescriptor = {
    kind: 'field';
    placement: MemberPlacement;
    descriptor: MemberDescriptor;
    key: string | symbol;
    initializer: () => unknown;
};

type MethodDescriptor = {
    kind: 'method';
    placement: MemberPlacement;
    descriptor: MemberDescriptor;
    key: string | symbol;
};