export declare const members: Map<string, Member>;
export declare type MemberId = string;
declare type MemberUsername = string;
declare type MemberFirstname = string;
declare type MemberLastname = string;
export declare class Member {
    id: MemberId;
    username: MemberUsername;
    firstname: MemberFirstname;
    lastname: MemberLastname;
    inventory: [];
    constructor(username: MemberUsername, firstname: MemberFirstname, lastname: MemberLastname, inventory: []);
}
export {};
//# sourceMappingURL=Member.d.ts.map