
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model AdmissionInquiry
 * 
 */
export type AdmissionInquiry = $Result.DefaultSelection<Prisma.$AdmissionInquiryPayload>
/**
 * Model AlumniRegistration
 * 
 */
export type AlumniRegistration = $Result.DefaultSelection<Prisma.$AlumniRegistrationPayload>
/**
 * Model NewsletterSubscription
 * 
 */
export type NewsletterSubscription = $Result.DefaultSelection<Prisma.$NewsletterSubscriptionPayload>
/**
 * Model ContactInquiry
 * 
 */
export type ContactInquiry = $Result.DefaultSelection<Prisma.$ContactInquiryPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AdmissionType: {
  NURSERY_8: 'NURSERY_8',
  GRADE_9_12: 'GRADE_9_12'
};

export type AdmissionType = (typeof AdmissionType)[keyof typeof AdmissionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AdmissionType = $Enums.AdmissionType

export const AdmissionType: typeof $Enums.AdmissionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admissionInquiry`: Exposes CRUD operations for the **AdmissionInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmissionInquiries
    * const admissionInquiries = await prisma.admissionInquiry.findMany()
    * ```
    */
  get admissionInquiry(): Prisma.AdmissionInquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alumniRegistration`: Exposes CRUD operations for the **AlumniRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlumniRegistrations
    * const alumniRegistrations = await prisma.alumniRegistration.findMany()
    * ```
    */
  get alumniRegistration(): Prisma.AlumniRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterSubscription`: Exposes CRUD operations for the **NewsletterSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterSubscriptions
    * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
    * ```
    */
  get newsletterSubscription(): Prisma.NewsletterSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInquiry`: Exposes CRUD operations for the **ContactInquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInquiries
    * const contactInquiries = await prisma.contactInquiry.findMany()
    * ```
    */
  get contactInquiry(): Prisma.ContactInquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Teacher: 'Teacher',
    Article: 'Article',
    AdmissionInquiry: 'AdmissionInquiry',
    AlumniRegistration: 'AlumniRegistration',
    NewsletterSubscription: 'NewsletterSubscription',
    ContactInquiry: 'ContactInquiry',
    Account: 'Account'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "teacher" | "article" | "admissionInquiry" | "alumniRegistration" | "newsletterSubscription" | "contactInquiry" | "account"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      AdmissionInquiry: {
        payload: Prisma.$AdmissionInquiryPayload<ExtArgs>
        fields: Prisma.AdmissionInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          findFirst: {
            args: Prisma.AdmissionInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          findMany: {
            args: Prisma.AdmissionInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>[]
          }
          create: {
            args: Prisma.AdmissionInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          createMany: {
            args: Prisma.AdmissionInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionInquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>[]
          }
          delete: {
            args: Prisma.AdmissionInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          update: {
            args: Prisma.AdmissionInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdmissionInquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>[]
          }
          upsert: {
            args: Prisma.AdmissionInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionInquiryPayload>
          }
          aggregate: {
            args: Prisma.AdmissionInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissionInquiry>
          }
          groupBy: {
            args: Prisma.AdmissionInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionInquiryCountAggregateOutputType> | number
          }
        }
      }
      AlumniRegistration: {
        payload: Prisma.$AlumniRegistrationPayload<ExtArgs>
        fields: Prisma.AlumniRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumniRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumniRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          findFirst: {
            args: Prisma.AlumniRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumniRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          findMany: {
            args: Prisma.AlumniRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>[]
          }
          create: {
            args: Prisma.AlumniRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          createMany: {
            args: Prisma.AlumniRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlumniRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>[]
          }
          delete: {
            args: Prisma.AlumniRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          update: {
            args: Prisma.AlumniRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.AlumniRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumniRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlumniRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.AlumniRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniRegistrationPayload>
          }
          aggregate: {
            args: Prisma.AlumniRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumniRegistration>
          }
          groupBy: {
            args: Prisma.AlumniRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumniRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumniRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<AlumniRegistrationCountAggregateOutputType> | number
          }
        }
      }
      NewsletterSubscription: {
        payload: Prisma.$NewsletterSubscriptionPayload<ExtArgs>
        fields: Prisma.NewsletterSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.NewsletterSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findMany: {
            args: Prisma.NewsletterSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          create: {
            args: Prisma.NewsletterSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          createMany: {
            args: Prisma.NewsletterSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.NewsletterSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          update: {
            args: Prisma.NewsletterSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.NewsletterSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterSubscription>
          }
          groupBy: {
            args: Prisma.NewsletterSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ContactInquiry: {
        payload: Prisma.$ContactInquiryPayload<ExtArgs>
        fields: Prisma.ContactInquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          findFirst: {
            args: Prisma.ContactInquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          findMany: {
            args: Prisma.ContactInquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>[]
          }
          create: {
            args: Prisma.ContactInquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          createMany: {
            args: Prisma.ContactInquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>[]
          }
          delete: {
            args: Prisma.ContactInquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          update: {
            args: Prisma.ContactInquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          deleteMany: {
            args: Prisma.ContactInquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>[]
          }
          upsert: {
            args: Prisma.ContactInquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInquiryPayload>
          }
          aggregate: {
            args: Prisma.ContactInquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInquiry>
          }
          groupBy: {
            args: Prisma.ContactInquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInquiryCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInquiryCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    teacher?: TeacherOmit
    article?: ArticleOmit
    admissionInquiry?: AdmissionInquiryOmit
    alumniRegistration?: AlumniRegistrationOmit
    newsletterSubscription?: NewsletterSubscriptionOmit
    contactInquiry?: ContactInquiryOmit
    account?: AccountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    techers: number
    articles: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techers?: boolean | UserCountOutputTypeCountTechersArgs
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTechersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    articles: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | TeacherCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    name: string | null
    image: string | null
    role: $Enums.Role | null
    roleExplicitlyChosen: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    name: string | null
    image: string | null
    role: $Enums.Role | null
    roleExplicitlyChosen: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    password: number
    name: number
    image: number
    role: number
    roleExplicitlyChosen: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    password?: true
    name?: true
    image?: true
    role?: true
    roleExplicitlyChosen?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    password?: true
    name?: true
    image?: true
    role?: true
    roleExplicitlyChosen?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    password?: true
    name?: true
    image?: true
    role?: true
    roleExplicitlyChosen?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    password: string | null
    name: string
    image: string
    role: $Enums.Role
    roleExplicitlyChosen: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    roleExplicitlyChosen?: boolean
    createdAt?: boolean
    techers?: boolean | User$techersArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    roleExplicitlyChosen?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    roleExplicitlyChosen?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    roleExplicitlyChosen?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "password" | "name" | "image" | "role" | "roleExplicitlyChosen" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techers?: boolean | User$techersArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      techers: Prisma.$TeacherPayload<ExtArgs>[]
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      password: string | null
      name: string
      image: string
      role: $Enums.Role
      roleExplicitlyChosen: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    techers<T extends User$techersArgs<ExtArgs> = {}>(args?: Subset<T, User$techersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly roleExplicitlyChosen: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.techers
   */
  export type User$techersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    articles?: boolean | Teacher$articlesArgs<ExtArgs>
    User?: boolean | Teacher$UserArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Teacher$UserArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Teacher$UserArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "email" | "phone" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Teacher$articlesArgs<ExtArgs>
    User?: boolean | Teacher$UserArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Teacher$UserArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Teacher$UserArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Teacher$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Teacher$UserArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly subject: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly phone: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
    readonly userId: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.articles
   */
  export type Teacher$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Teacher.User
   */
  export type Teacher$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    status: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    status: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    status: number
    teacherId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    status?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    status?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    status?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    content: string
    status: string
    teacherId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "status" | "teacherId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Article$teacherArgs<ExtArgs>
    User?: boolean | Article$UserArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      status: string
      teacherId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Article$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Article$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Article$UserArgs<ExtArgs> = {}>(args?: Subset<T, Article$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly status: FieldRef<"Article", 'String'>
    readonly teacherId: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
    readonly userId: FieldRef<"Article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.teacher
   */
  export type Article$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Article.User
   */
  export type Article$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model AdmissionInquiry
   */

  export type AggregateAdmissionInquiry = {
    _count: AdmissionInquiryCountAggregateOutputType | null
    _avg: AdmissionInquiryAvgAggregateOutputType | null
    _sum: AdmissionInquirySumAggregateOutputType | null
    _min: AdmissionInquiryMinAggregateOutputType | null
    _max: AdmissionInquiryMaxAggregateOutputType | null
  }

  export type AdmissionInquiryAvgAggregateOutputType = {
    numberOfChildren: number | null
  }

  export type AdmissionInquirySumAggregateOutputType = {
    numberOfChildren: number | null
  }

  export type AdmissionInquiryMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    parentName: string | null
    numberOfChildren: number | null
    admissionType: $Enums.AdmissionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionInquiryMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    parentName: string | null
    numberOfChildren: number | null
    admissionType: $Enums.AdmissionType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionInquiryCountAggregateOutputType = {
    id: number
    phoneNumber: number
    parentName: number
    numberOfChildren: number
    desiredClasses: number
    admissionType: number
    streams: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmissionInquiryAvgAggregateInputType = {
    numberOfChildren?: true
  }

  export type AdmissionInquirySumAggregateInputType = {
    numberOfChildren?: true
  }

  export type AdmissionInquiryMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    parentName?: true
    numberOfChildren?: true
    admissionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionInquiryMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    parentName?: true
    numberOfChildren?: true
    admissionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionInquiryCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    parentName?: true
    numberOfChildren?: true
    desiredClasses?: true
    admissionType?: true
    streams?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmissionInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionInquiry to aggregate.
     */
    where?: AdmissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionInquiries to fetch.
     */
    orderBy?: AdmissionInquiryOrderByWithRelationInput | AdmissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmissionInquiries
    **/
    _count?: true | AdmissionInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionInquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionInquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionInquiryMaxAggregateInputType
  }

  export type GetAdmissionInquiryAggregateType<T extends AdmissionInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissionInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissionInquiry[P]>
      : GetScalarType<T[P], AggregateAdmissionInquiry[P]>
  }




  export type AdmissionInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionInquiryWhereInput
    orderBy?: AdmissionInquiryOrderByWithAggregationInput | AdmissionInquiryOrderByWithAggregationInput[]
    by: AdmissionInquiryScalarFieldEnum[] | AdmissionInquiryScalarFieldEnum
    having?: AdmissionInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionInquiryCountAggregateInputType | true
    _avg?: AdmissionInquiryAvgAggregateInputType
    _sum?: AdmissionInquirySumAggregateInputType
    _min?: AdmissionInquiryMinAggregateInputType
    _max?: AdmissionInquiryMaxAggregateInputType
  }

  export type AdmissionInquiryGroupByOutputType = {
    id: string
    phoneNumber: string
    parentName: string
    numberOfChildren: number
    desiredClasses: string[]
    admissionType: $Enums.AdmissionType
    streams: string[]
    createdAt: Date
    updatedAt: Date
    _count: AdmissionInquiryCountAggregateOutputType | null
    _avg: AdmissionInquiryAvgAggregateOutputType | null
    _sum: AdmissionInquirySumAggregateOutputType | null
    _min: AdmissionInquiryMinAggregateOutputType | null
    _max: AdmissionInquiryMaxAggregateOutputType | null
  }

  type GetAdmissionInquiryGroupByPayload<T extends AdmissionInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionInquiryGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    parentName?: boolean
    numberOfChildren?: boolean
    desiredClasses?: boolean
    admissionType?: boolean
    streams?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionInquiry"]>

  export type AdmissionInquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    parentName?: boolean
    numberOfChildren?: boolean
    desiredClasses?: boolean
    admissionType?: boolean
    streams?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionInquiry"]>

  export type AdmissionInquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    parentName?: boolean
    numberOfChildren?: boolean
    desiredClasses?: boolean
    admissionType?: boolean
    streams?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admissionInquiry"]>

  export type AdmissionInquirySelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    parentName?: boolean
    numberOfChildren?: boolean
    desiredClasses?: boolean
    admissionType?: boolean
    streams?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdmissionInquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "parentName" | "numberOfChildren" | "desiredClasses" | "admissionType" | "streams" | "createdAt" | "updatedAt", ExtArgs["result"]["admissionInquiry"]>

  export type $AdmissionInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmissionInquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      parentName: string
      numberOfChildren: number
      desiredClasses: string[]
      admissionType: $Enums.AdmissionType
      streams: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admissionInquiry"]>
    composites: {}
  }

  type AdmissionInquiryGetPayload<S extends boolean | null | undefined | AdmissionInquiryDefaultArgs> = $Result.GetResult<Prisma.$AdmissionInquiryPayload, S>

  type AdmissionInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionInquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionInquiryCountAggregateInputType | true
    }

  export interface AdmissionInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmissionInquiry'], meta: { name: 'AdmissionInquiry' } }
    /**
     * Find zero or one AdmissionInquiry that matches the filter.
     * @param {AdmissionInquiryFindUniqueArgs} args - Arguments to find a AdmissionInquiry
     * @example
     * // Get one AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionInquiryFindUniqueArgs>(args: SelectSubset<T, AdmissionInquiryFindUniqueArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmissionInquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionInquiryFindUniqueOrThrowArgs} args - Arguments to find a AdmissionInquiry
     * @example
     * // Get one AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryFindFirstArgs} args - Arguments to find a AdmissionInquiry
     * @example
     * // Get one AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionInquiryFindFirstArgs>(args?: SelectSubset<T, AdmissionInquiryFindFirstArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryFindFirstOrThrowArgs} args - Arguments to find a AdmissionInquiry
     * @example
     * // Get one AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmissionInquiries
     * const admissionInquiries = await prisma.admissionInquiry.findMany()
     * 
     * // Get first 10 AdmissionInquiries
     * const admissionInquiries = await prisma.admissionInquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionInquiryWithIdOnly = await prisma.admissionInquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionInquiryFindManyArgs>(args?: SelectSubset<T, AdmissionInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmissionInquiry.
     * @param {AdmissionInquiryCreateArgs} args - Arguments to create a AdmissionInquiry.
     * @example
     * // Create one AdmissionInquiry
     * const AdmissionInquiry = await prisma.admissionInquiry.create({
     *   data: {
     *     // ... data to create a AdmissionInquiry
     *   }
     * })
     * 
     */
    create<T extends AdmissionInquiryCreateArgs>(args: SelectSubset<T, AdmissionInquiryCreateArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmissionInquiries.
     * @param {AdmissionInquiryCreateManyArgs} args - Arguments to create many AdmissionInquiries.
     * @example
     * // Create many AdmissionInquiries
     * const admissionInquiry = await prisma.admissionInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionInquiryCreateManyArgs>(args?: SelectSubset<T, AdmissionInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdmissionInquiries and returns the data saved in the database.
     * @param {AdmissionInquiryCreateManyAndReturnArgs} args - Arguments to create many AdmissionInquiries.
     * @example
     * // Create many AdmissionInquiries
     * const admissionInquiry = await prisma.admissionInquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdmissionInquiries and only return the `id`
     * const admissionInquiryWithIdOnly = await prisma.admissionInquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionInquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionInquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdmissionInquiry.
     * @param {AdmissionInquiryDeleteArgs} args - Arguments to delete one AdmissionInquiry.
     * @example
     * // Delete one AdmissionInquiry
     * const AdmissionInquiry = await prisma.admissionInquiry.delete({
     *   where: {
     *     // ... filter to delete one AdmissionInquiry
     *   }
     * })
     * 
     */
    delete<T extends AdmissionInquiryDeleteArgs>(args: SelectSubset<T, AdmissionInquiryDeleteArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmissionInquiry.
     * @param {AdmissionInquiryUpdateArgs} args - Arguments to update one AdmissionInquiry.
     * @example
     * // Update one AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionInquiryUpdateArgs>(args: SelectSubset<T, AdmissionInquiryUpdateArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmissionInquiries.
     * @param {AdmissionInquiryDeleteManyArgs} args - Arguments to filter AdmissionInquiries to delete.
     * @example
     * // Delete a few AdmissionInquiries
     * const { count } = await prisma.admissionInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionInquiryDeleteManyArgs>(args?: SelectSubset<T, AdmissionInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmissionInquiries
     * const admissionInquiry = await prisma.admissionInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionInquiryUpdateManyArgs>(args: SelectSubset<T, AdmissionInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionInquiries and returns the data updated in the database.
     * @param {AdmissionInquiryUpdateManyAndReturnArgs} args - Arguments to update many AdmissionInquiries.
     * @example
     * // Update many AdmissionInquiries
     * const admissionInquiry = await prisma.admissionInquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdmissionInquiries and only return the `id`
     * const admissionInquiryWithIdOnly = await prisma.admissionInquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdmissionInquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, AdmissionInquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdmissionInquiry.
     * @param {AdmissionInquiryUpsertArgs} args - Arguments to update or create a AdmissionInquiry.
     * @example
     * // Update or create a AdmissionInquiry
     * const admissionInquiry = await prisma.admissionInquiry.upsert({
     *   create: {
     *     // ... data to create a AdmissionInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmissionInquiry we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionInquiryUpsertArgs>(args: SelectSubset<T, AdmissionInquiryUpsertArgs<ExtArgs>>): Prisma__AdmissionInquiryClient<$Result.GetResult<Prisma.$AdmissionInquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdmissionInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryCountArgs} args - Arguments to filter AdmissionInquiries to count.
     * @example
     * // Count the number of AdmissionInquiries
     * const count = await prisma.admissionInquiry.count({
     *   where: {
     *     // ... the filter for the AdmissionInquiries we want to count
     *   }
     * })
    **/
    count<T extends AdmissionInquiryCountArgs>(
      args?: Subset<T, AdmissionInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmissionInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionInquiryAggregateArgs>(args: Subset<T, AdmissionInquiryAggregateArgs>): Prisma.PrismaPromise<GetAdmissionInquiryAggregateType<T>>

    /**
     * Group by AdmissionInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionInquiryGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmissionInquiry model
   */
  readonly fields: AdmissionInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmissionInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdmissionInquiry model
   */
  interface AdmissionInquiryFieldRefs {
    readonly id: FieldRef<"AdmissionInquiry", 'String'>
    readonly phoneNumber: FieldRef<"AdmissionInquiry", 'String'>
    readonly parentName: FieldRef<"AdmissionInquiry", 'String'>
    readonly numberOfChildren: FieldRef<"AdmissionInquiry", 'Int'>
    readonly desiredClasses: FieldRef<"AdmissionInquiry", 'String[]'>
    readonly admissionType: FieldRef<"AdmissionInquiry", 'AdmissionType'>
    readonly streams: FieldRef<"AdmissionInquiry", 'String[]'>
    readonly createdAt: FieldRef<"AdmissionInquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmissionInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmissionInquiry findUnique
   */
  export type AdmissionInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionInquiry to fetch.
     */
    where: AdmissionInquiryWhereUniqueInput
  }

  /**
   * AdmissionInquiry findUniqueOrThrow
   */
  export type AdmissionInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionInquiry to fetch.
     */
    where: AdmissionInquiryWhereUniqueInput
  }

  /**
   * AdmissionInquiry findFirst
   */
  export type AdmissionInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionInquiry to fetch.
     */
    where?: AdmissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionInquiries to fetch.
     */
    orderBy?: AdmissionInquiryOrderByWithRelationInput | AdmissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionInquiries.
     */
    cursor?: AdmissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionInquiries.
     */
    distinct?: AdmissionInquiryScalarFieldEnum | AdmissionInquiryScalarFieldEnum[]
  }

  /**
   * AdmissionInquiry findFirstOrThrow
   */
  export type AdmissionInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionInquiry to fetch.
     */
    where?: AdmissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionInquiries to fetch.
     */
    orderBy?: AdmissionInquiryOrderByWithRelationInput | AdmissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionInquiries.
     */
    cursor?: AdmissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionInquiries.
     */
    distinct?: AdmissionInquiryScalarFieldEnum | AdmissionInquiryScalarFieldEnum[]
  }

  /**
   * AdmissionInquiry findMany
   */
  export type AdmissionInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter, which AdmissionInquiries to fetch.
     */
    where?: AdmissionInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionInquiries to fetch.
     */
    orderBy?: AdmissionInquiryOrderByWithRelationInput | AdmissionInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmissionInquiries.
     */
    cursor?: AdmissionInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionInquiries.
     */
    skip?: number
    distinct?: AdmissionInquiryScalarFieldEnum | AdmissionInquiryScalarFieldEnum[]
  }

  /**
   * AdmissionInquiry create
   */
  export type AdmissionInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a AdmissionInquiry.
     */
    data: XOR<AdmissionInquiryCreateInput, AdmissionInquiryUncheckedCreateInput>
  }

  /**
   * AdmissionInquiry createMany
   */
  export type AdmissionInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmissionInquiries.
     */
    data: AdmissionInquiryCreateManyInput | AdmissionInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmissionInquiry createManyAndReturn
   */
  export type AdmissionInquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * The data used to create many AdmissionInquiries.
     */
    data: AdmissionInquiryCreateManyInput | AdmissionInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmissionInquiry update
   */
  export type AdmissionInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a AdmissionInquiry.
     */
    data: XOR<AdmissionInquiryUpdateInput, AdmissionInquiryUncheckedUpdateInput>
    /**
     * Choose, which AdmissionInquiry to update.
     */
    where: AdmissionInquiryWhereUniqueInput
  }

  /**
   * AdmissionInquiry updateMany
   */
  export type AdmissionInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmissionInquiries.
     */
    data: XOR<AdmissionInquiryUpdateManyMutationInput, AdmissionInquiryUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionInquiries to update
     */
    where?: AdmissionInquiryWhereInput
    /**
     * Limit how many AdmissionInquiries to update.
     */
    limit?: number
  }

  /**
   * AdmissionInquiry updateManyAndReturn
   */
  export type AdmissionInquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * The data used to update AdmissionInquiries.
     */
    data: XOR<AdmissionInquiryUpdateManyMutationInput, AdmissionInquiryUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionInquiries to update
     */
    where?: AdmissionInquiryWhereInput
    /**
     * Limit how many AdmissionInquiries to update.
     */
    limit?: number
  }

  /**
   * AdmissionInquiry upsert
   */
  export type AdmissionInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the AdmissionInquiry to update in case it exists.
     */
    where: AdmissionInquiryWhereUniqueInput
    /**
     * In case the AdmissionInquiry found by the `where` argument doesn't exist, create a new AdmissionInquiry with this data.
     */
    create: XOR<AdmissionInquiryCreateInput, AdmissionInquiryUncheckedCreateInput>
    /**
     * In case the AdmissionInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionInquiryUpdateInput, AdmissionInquiryUncheckedUpdateInput>
  }

  /**
   * AdmissionInquiry delete
   */
  export type AdmissionInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
    /**
     * Filter which AdmissionInquiry to delete.
     */
    where: AdmissionInquiryWhereUniqueInput
  }

  /**
   * AdmissionInquiry deleteMany
   */
  export type AdmissionInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionInquiries to delete
     */
    where?: AdmissionInquiryWhereInput
    /**
     * Limit how many AdmissionInquiries to delete.
     */
    limit?: number
  }

  /**
   * AdmissionInquiry without action
   */
  export type AdmissionInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionInquiry
     */
    select?: AdmissionInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionInquiry
     */
    omit?: AdmissionInquiryOmit<ExtArgs> | null
  }


  /**
   * Model AlumniRegistration
   */

  export type AggregateAlumniRegistration = {
    _count: AlumniRegistrationCountAggregateOutputType | null
    _min: AlumniRegistrationMinAggregateOutputType | null
    _max: AlumniRegistrationMaxAggregateOutputType | null
  }

  export type AlumniRegistrationMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    graduationYear: string | null
    course: string | null
    profession: string | null
    company: string | null
    address: string | null
    city: string | null
    country: string | null
    bio: string | null
    interests: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniRegistrationMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    graduationYear: string | null
    course: string | null
    profession: string | null
    company: string | null
    address: string | null
    city: string | null
    country: string | null
    bio: string | null
    interests: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniRegistrationCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    graduationYear: number
    course: number
    profession: number
    company: number
    address: number
    city: number
    country: number
    bio: number
    socialLinks: number
    interests: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlumniRegistrationMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    graduationYear?: true
    course?: true
    profession?: true
    company?: true
    address?: true
    city?: true
    country?: true
    bio?: true
    interests?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlumniRegistrationMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    graduationYear?: true
    course?: true
    profession?: true
    company?: true
    address?: true
    city?: true
    country?: true
    bio?: true
    interests?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlumniRegistrationCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    graduationYear?: true
    course?: true
    profession?: true
    company?: true
    address?: true
    city?: true
    country?: true
    bio?: true
    socialLinks?: true
    interests?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlumniRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumniRegistration to aggregate.
     */
    where?: AlumniRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniRegistrations to fetch.
     */
    orderBy?: AlumniRegistrationOrderByWithRelationInput | AlumniRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumniRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlumniRegistrations
    **/
    _count?: true | AlumniRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumniRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumniRegistrationMaxAggregateInputType
  }

  export type GetAlumniRegistrationAggregateType<T extends AlumniRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumniRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumniRegistration[P]>
      : GetScalarType<T[P], AggregateAlumniRegistration[P]>
  }




  export type AlumniRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumniRegistrationWhereInput
    orderBy?: AlumniRegistrationOrderByWithAggregationInput | AlumniRegistrationOrderByWithAggregationInput[]
    by: AlumniRegistrationScalarFieldEnum[] | AlumniRegistrationScalarFieldEnum
    having?: AlumniRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumniRegistrationCountAggregateInputType | true
    _min?: AlumniRegistrationMinAggregateInputType
    _max?: AlumniRegistrationMaxAggregateInputType
  }

  export type AlumniRegistrationGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    graduationYear: string
    course: string | null
    profession: string | null
    company: string | null
    address: string | null
    city: string | null
    country: string | null
    bio: string | null
    socialLinks: JsonValue | null
    interests: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlumniRegistrationCountAggregateOutputType | null
    _min: AlumniRegistrationMinAggregateOutputType | null
    _max: AlumniRegistrationMaxAggregateOutputType | null
  }

  type GetAlumniRegistrationGroupByPayload<T extends AlumniRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumniRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumniRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumniRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], AlumniRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type AlumniRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    graduationYear?: boolean
    course?: boolean
    profession?: boolean
    company?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bio?: boolean
    socialLinks?: boolean
    interests?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumniRegistration"]>

  export type AlumniRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    graduationYear?: boolean
    course?: boolean
    profession?: boolean
    company?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bio?: boolean
    socialLinks?: boolean
    interests?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumniRegistration"]>

  export type AlumniRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    graduationYear?: boolean
    course?: boolean
    profession?: boolean
    company?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bio?: boolean
    socialLinks?: boolean
    interests?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumniRegistration"]>

  export type AlumniRegistrationSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    graduationYear?: boolean
    course?: boolean
    profession?: boolean
    company?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bio?: boolean
    socialLinks?: boolean
    interests?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlumniRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "graduationYear" | "course" | "profession" | "company" | "address" | "city" | "country" | "bio" | "socialLinks" | "interests" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["alumniRegistration"]>

  export type $AlumniRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlumniRegistration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      graduationYear: string
      course: string | null
      profession: string | null
      company: string | null
      address: string | null
      city: string | null
      country: string | null
      bio: string | null
      socialLinks: Prisma.JsonValue | null
      interests: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alumniRegistration"]>
    composites: {}
  }

  type AlumniRegistrationGetPayload<S extends boolean | null | undefined | AlumniRegistrationDefaultArgs> = $Result.GetResult<Prisma.$AlumniRegistrationPayload, S>

  type AlumniRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlumniRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlumniRegistrationCountAggregateInputType | true
    }

  export interface AlumniRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlumniRegistration'], meta: { name: 'AlumniRegistration' } }
    /**
     * Find zero or one AlumniRegistration that matches the filter.
     * @param {AlumniRegistrationFindUniqueArgs} args - Arguments to find a AlumniRegistration
     * @example
     * // Get one AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumniRegistrationFindUniqueArgs>(args: SelectSubset<T, AlumniRegistrationFindUniqueArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlumniRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlumniRegistrationFindUniqueOrThrowArgs} args - Arguments to find a AlumniRegistration
     * @example
     * // Get one AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumniRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumniRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlumniRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationFindFirstArgs} args - Arguments to find a AlumniRegistration
     * @example
     * // Get one AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumniRegistrationFindFirstArgs>(args?: SelectSubset<T, AlumniRegistrationFindFirstArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlumniRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationFindFirstOrThrowArgs} args - Arguments to find a AlumniRegistration
     * @example
     * // Get one AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumniRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumniRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlumniRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlumniRegistrations
     * const alumniRegistrations = await prisma.alumniRegistration.findMany()
     * 
     * // Get first 10 AlumniRegistrations
     * const alumniRegistrations = await prisma.alumniRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumniRegistrationWithIdOnly = await prisma.alumniRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlumniRegistrationFindManyArgs>(args?: SelectSubset<T, AlumniRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlumniRegistration.
     * @param {AlumniRegistrationCreateArgs} args - Arguments to create a AlumniRegistration.
     * @example
     * // Create one AlumniRegistration
     * const AlumniRegistration = await prisma.alumniRegistration.create({
     *   data: {
     *     // ... data to create a AlumniRegistration
     *   }
     * })
     * 
     */
    create<T extends AlumniRegistrationCreateArgs>(args: SelectSubset<T, AlumniRegistrationCreateArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlumniRegistrations.
     * @param {AlumniRegistrationCreateManyArgs} args - Arguments to create many AlumniRegistrations.
     * @example
     * // Create many AlumniRegistrations
     * const alumniRegistration = await prisma.alumniRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumniRegistrationCreateManyArgs>(args?: SelectSubset<T, AlumniRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlumniRegistrations and returns the data saved in the database.
     * @param {AlumniRegistrationCreateManyAndReturnArgs} args - Arguments to create many AlumniRegistrations.
     * @example
     * // Create many AlumniRegistrations
     * const alumniRegistration = await prisma.alumniRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlumniRegistrations and only return the `id`
     * const alumniRegistrationWithIdOnly = await prisma.alumniRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlumniRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, AlumniRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlumniRegistration.
     * @param {AlumniRegistrationDeleteArgs} args - Arguments to delete one AlumniRegistration.
     * @example
     * // Delete one AlumniRegistration
     * const AlumniRegistration = await prisma.alumniRegistration.delete({
     *   where: {
     *     // ... filter to delete one AlumniRegistration
     *   }
     * })
     * 
     */
    delete<T extends AlumniRegistrationDeleteArgs>(args: SelectSubset<T, AlumniRegistrationDeleteArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlumniRegistration.
     * @param {AlumniRegistrationUpdateArgs} args - Arguments to update one AlumniRegistration.
     * @example
     * // Update one AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumniRegistrationUpdateArgs>(args: SelectSubset<T, AlumniRegistrationUpdateArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlumniRegistrations.
     * @param {AlumniRegistrationDeleteManyArgs} args - Arguments to filter AlumniRegistrations to delete.
     * @example
     * // Delete a few AlumniRegistrations
     * const { count } = await prisma.alumniRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumniRegistrationDeleteManyArgs>(args?: SelectSubset<T, AlumniRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumniRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlumniRegistrations
     * const alumniRegistration = await prisma.alumniRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumniRegistrationUpdateManyArgs>(args: SelectSubset<T, AlumniRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumniRegistrations and returns the data updated in the database.
     * @param {AlumniRegistrationUpdateManyAndReturnArgs} args - Arguments to update many AlumniRegistrations.
     * @example
     * // Update many AlumniRegistrations
     * const alumniRegistration = await prisma.alumniRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlumniRegistrations and only return the `id`
     * const alumniRegistrationWithIdOnly = await prisma.alumniRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlumniRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, AlumniRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlumniRegistration.
     * @param {AlumniRegistrationUpsertArgs} args - Arguments to update or create a AlumniRegistration.
     * @example
     * // Update or create a AlumniRegistration
     * const alumniRegistration = await prisma.alumniRegistration.upsert({
     *   create: {
     *     // ... data to create a AlumniRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlumniRegistration we want to update
     *   }
     * })
     */
    upsert<T extends AlumniRegistrationUpsertArgs>(args: SelectSubset<T, AlumniRegistrationUpsertArgs<ExtArgs>>): Prisma__AlumniRegistrationClient<$Result.GetResult<Prisma.$AlumniRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlumniRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationCountArgs} args - Arguments to filter AlumniRegistrations to count.
     * @example
     * // Count the number of AlumniRegistrations
     * const count = await prisma.alumniRegistration.count({
     *   where: {
     *     // ... the filter for the AlumniRegistrations we want to count
     *   }
     * })
    **/
    count<T extends AlumniRegistrationCountArgs>(
      args?: Subset<T, AlumniRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumniRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlumniRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlumniRegistrationAggregateArgs>(args: Subset<T, AlumniRegistrationAggregateArgs>): Prisma.PrismaPromise<GetAlumniRegistrationAggregateType<T>>

    /**
     * Group by AlumniRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlumniRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumniRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: AlumniRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlumniRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumniRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlumniRegistration model
   */
  readonly fields: AlumniRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlumniRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumniRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlumniRegistration model
   */
  interface AlumniRegistrationFieldRefs {
    readonly id: FieldRef<"AlumniRegistration", 'String'>
    readonly firstName: FieldRef<"AlumniRegistration", 'String'>
    readonly lastName: FieldRef<"AlumniRegistration", 'String'>
    readonly email: FieldRef<"AlumniRegistration", 'String'>
    readonly phone: FieldRef<"AlumniRegistration", 'String'>
    readonly graduationYear: FieldRef<"AlumniRegistration", 'String'>
    readonly course: FieldRef<"AlumniRegistration", 'String'>
    readonly profession: FieldRef<"AlumniRegistration", 'String'>
    readonly company: FieldRef<"AlumniRegistration", 'String'>
    readonly address: FieldRef<"AlumniRegistration", 'String'>
    readonly city: FieldRef<"AlumniRegistration", 'String'>
    readonly country: FieldRef<"AlumniRegistration", 'String'>
    readonly bio: FieldRef<"AlumniRegistration", 'String'>
    readonly socialLinks: FieldRef<"AlumniRegistration", 'Json'>
    readonly interests: FieldRef<"AlumniRegistration", 'String'>
    readonly isVerified: FieldRef<"AlumniRegistration", 'Boolean'>
    readonly createdAt: FieldRef<"AlumniRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"AlumniRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlumniRegistration findUnique
   */
  export type AlumniRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which AlumniRegistration to fetch.
     */
    where: AlumniRegistrationWhereUniqueInput
  }

  /**
   * AlumniRegistration findUniqueOrThrow
   */
  export type AlumniRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which AlumniRegistration to fetch.
     */
    where: AlumniRegistrationWhereUniqueInput
  }

  /**
   * AlumniRegistration findFirst
   */
  export type AlumniRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which AlumniRegistration to fetch.
     */
    where?: AlumniRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniRegistrations to fetch.
     */
    orderBy?: AlumniRegistrationOrderByWithRelationInput | AlumniRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumniRegistrations.
     */
    cursor?: AlumniRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumniRegistrations.
     */
    distinct?: AlumniRegistrationScalarFieldEnum | AlumniRegistrationScalarFieldEnum[]
  }

  /**
   * AlumniRegistration findFirstOrThrow
   */
  export type AlumniRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which AlumniRegistration to fetch.
     */
    where?: AlumniRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniRegistrations to fetch.
     */
    orderBy?: AlumniRegistrationOrderByWithRelationInput | AlumniRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumniRegistrations.
     */
    cursor?: AlumniRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumniRegistrations.
     */
    distinct?: AlumniRegistrationScalarFieldEnum | AlumniRegistrationScalarFieldEnum[]
  }

  /**
   * AlumniRegistration findMany
   */
  export type AlumniRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which AlumniRegistrations to fetch.
     */
    where?: AlumniRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniRegistrations to fetch.
     */
    orderBy?: AlumniRegistrationOrderByWithRelationInput | AlumniRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlumniRegistrations.
     */
    cursor?: AlumniRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniRegistrations.
     */
    skip?: number
    distinct?: AlumniRegistrationScalarFieldEnum | AlumniRegistrationScalarFieldEnum[]
  }

  /**
   * AlumniRegistration create
   */
  export type AlumniRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to create a AlumniRegistration.
     */
    data: XOR<AlumniRegistrationCreateInput, AlumniRegistrationUncheckedCreateInput>
  }

  /**
   * AlumniRegistration createMany
   */
  export type AlumniRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlumniRegistrations.
     */
    data: AlumniRegistrationCreateManyInput | AlumniRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlumniRegistration createManyAndReturn
   */
  export type AlumniRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many AlumniRegistrations.
     */
    data: AlumniRegistrationCreateManyInput | AlumniRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlumniRegistration update
   */
  export type AlumniRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to update a AlumniRegistration.
     */
    data: XOR<AlumniRegistrationUpdateInput, AlumniRegistrationUncheckedUpdateInput>
    /**
     * Choose, which AlumniRegistration to update.
     */
    where: AlumniRegistrationWhereUniqueInput
  }

  /**
   * AlumniRegistration updateMany
   */
  export type AlumniRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlumniRegistrations.
     */
    data: XOR<AlumniRegistrationUpdateManyMutationInput, AlumniRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which AlumniRegistrations to update
     */
    where?: AlumniRegistrationWhereInput
    /**
     * Limit how many AlumniRegistrations to update.
     */
    limit?: number
  }

  /**
   * AlumniRegistration updateManyAndReturn
   */
  export type AlumniRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update AlumniRegistrations.
     */
    data: XOR<AlumniRegistrationUpdateManyMutationInput, AlumniRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which AlumniRegistrations to update
     */
    where?: AlumniRegistrationWhereInput
    /**
     * Limit how many AlumniRegistrations to update.
     */
    limit?: number
  }

  /**
   * AlumniRegistration upsert
   */
  export type AlumniRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * The filter to search for the AlumniRegistration to update in case it exists.
     */
    where: AlumniRegistrationWhereUniqueInput
    /**
     * In case the AlumniRegistration found by the `where` argument doesn't exist, create a new AlumniRegistration with this data.
     */
    create: XOR<AlumniRegistrationCreateInput, AlumniRegistrationUncheckedCreateInput>
    /**
     * In case the AlumniRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumniRegistrationUpdateInput, AlumniRegistrationUncheckedUpdateInput>
  }

  /**
   * AlumniRegistration delete
   */
  export type AlumniRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
    /**
     * Filter which AlumniRegistration to delete.
     */
    where: AlumniRegistrationWhereUniqueInput
  }

  /**
   * AlumniRegistration deleteMany
   */
  export type AlumniRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumniRegistrations to delete
     */
    where?: AlumniRegistrationWhereInput
    /**
     * Limit how many AlumniRegistrations to delete.
     */
    limit?: number
  }

  /**
   * AlumniRegistration without action
   */
  export type AlumniRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniRegistration
     */
    select?: AlumniRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlumniRegistration
     */
    omit?: AlumniRegistrationOmit<ExtArgs> | null
  }


  /**
   * Model NewsletterSubscription
   */

  export type AggregateNewsletterSubscription = {
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  export type NewsletterSubscriptionMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    graduationYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsletterSubscriptionMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    graduationYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsletterSubscriptionCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    graduationYear: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsletterSubscriptionMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    graduationYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsletterSubscriptionMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    graduationYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsletterSubscriptionCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    graduationYear?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsletterSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscription to aggregate.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterSubscriptions
    **/
    _count?: true | NewsletterSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type GetNewsletterSubscriptionAggregateType<T extends NewsletterSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
      : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
  }




  export type NewsletterSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterSubscriptionWhereInput
    orderBy?: NewsletterSubscriptionOrderByWithAggregationInput | NewsletterSubscriptionOrderByWithAggregationInput[]
    by: NewsletterSubscriptionScalarFieldEnum[] | NewsletterSubscriptionScalarFieldEnum
    having?: NewsletterSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterSubscriptionCountAggregateInputType | true
    _min?: NewsletterSubscriptionMinAggregateInputType
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type NewsletterSubscriptionGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    graduationYear: string
    createdAt: Date
    updatedAt: Date
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  type GetNewsletterSubscriptionGroupByPayload<T extends NewsletterSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    graduationYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    graduationYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    graduationYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    graduationYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsletterSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "graduationYear" | "createdAt" | "updatedAt", ExtArgs["result"]["newsletterSubscription"]>

  export type $NewsletterSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      graduationYear: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsletterSubscription"]>
    composites: {}
  }

  type NewsletterSubscriptionGetPayload<S extends boolean | null | undefined | NewsletterSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$NewsletterSubscriptionPayload, S>

  type NewsletterSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterSubscriptionCountAggregateInputType | true
    }

  export interface NewsletterSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterSubscription'], meta: { name: 'NewsletterSubscription' } }
    /**
     * Find zero or one NewsletterSubscription that matches the filter.
     * @param {NewsletterSubscriptionFindUniqueArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterSubscriptionFindUniqueArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterSubscriptionFindFirstArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
     * 
     * // Get first 10 NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterSubscriptionFindManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterSubscription.
     * @param {NewsletterSubscriptionCreateArgs} args - Arguments to create a NewsletterSubscription.
     * @example
     * // Create one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.create({
     *   data: {
     *     // ... data to create a NewsletterSubscription
     *   }
     * })
     * 
     */
    create<T extends NewsletterSubscriptionCreateArgs>(args: SelectSubset<T, NewsletterSubscriptionCreateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterSubscriptions.
     * @param {NewsletterSubscriptionCreateManyArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterSubscriptionCreateManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsletterSubscriptions and returns the data saved in the database.
     * @param {NewsletterSubscriptionCreateManyAndReturnArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsletterSubscription.
     * @param {NewsletterSubscriptionDeleteArgs} args - Arguments to delete one NewsletterSubscription.
     * @example
     * // Delete one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.delete({
     *   where: {
     *     // ... filter to delete one NewsletterSubscription
     *   }
     * })
     * 
     */
    delete<T extends NewsletterSubscriptionDeleteArgs>(args: SelectSubset<T, NewsletterSubscriptionDeleteArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpdateArgs} args - Arguments to update one NewsletterSubscription.
     * @example
     * // Update one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterSubscriptionUpdateArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterSubscriptions.
     * @param {NewsletterSubscriptionDeleteManyArgs} args - Arguments to filter NewsletterSubscriptions to delete.
     * @example
     * // Delete a few NewsletterSubscriptions
     * const { count } = await prisma.newsletterSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterSubscriptionDeleteManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterSubscriptionUpdateManyArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions and returns the data updated in the database.
     * @param {NewsletterSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many NewsletterSubscriptions.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsletterSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpsertArgs} args - Arguments to update or create a NewsletterSubscription.
     * @example
     * // Update or create a NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.upsert({
     *   create: {
     *     // ... data to create a NewsletterSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterSubscription we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterSubscriptionUpsertArgs>(args: SelectSubset<T, NewsletterSubscriptionUpsertArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionCountArgs} args - Arguments to filter NewsletterSubscriptions to count.
     * @example
     * // Count the number of NewsletterSubscriptions
     * const count = await prisma.newsletterSubscription.count({
     *   where: {
     *     // ... the filter for the NewsletterSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NewsletterSubscriptionCountArgs>(
      args?: Subset<T, NewsletterSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterSubscriptionAggregateArgs>(args: Subset<T, NewsletterSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetNewsletterSubscriptionAggregateType<T>>

    /**
     * Group by NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterSubscription model
   */
  readonly fields: NewsletterSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterSubscription model
   */
  interface NewsletterSubscriptionFieldRefs {
    readonly id: FieldRef<"NewsletterSubscription", 'String'>
    readonly firstName: FieldRef<"NewsletterSubscription", 'String'>
    readonly lastName: FieldRef<"NewsletterSubscription", 'String'>
    readonly email: FieldRef<"NewsletterSubscription", 'String'>
    readonly graduationYear: FieldRef<"NewsletterSubscription", 'String'>
    readonly createdAt: FieldRef<"NewsletterSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsletterSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterSubscription findUnique
   */
  export type NewsletterSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findUniqueOrThrow
   */
  export type NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findFirst
   */
  export type NewsletterSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findFirstOrThrow
   */
  export type NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findMany
   */
  export type NewsletterSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriptions to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription create
   */
  export type NewsletterSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
  }

  /**
   * NewsletterSubscription createMany
   */
  export type NewsletterSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscription createManyAndReturn
   */
  export type NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscription update
   */
  export type NewsletterSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which NewsletterSubscription to update.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription updateMany
   */
  export type NewsletterSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription updateManyAndReturn
   */
  export type NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription upsert
   */
  export type NewsletterSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsletterSubscription to update in case it exists.
     */
    where: NewsletterSubscriptionWhereUniqueInput
    /**
     * In case the NewsletterSubscription found by the `where` argument doesn't exist, create a new NewsletterSubscription with this data.
     */
    create: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
    /**
     * In case the NewsletterSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
  }

  /**
   * NewsletterSubscription delete
   */
  export type NewsletterSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Filter which NewsletterSubscription to delete.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription deleteMany
   */
  export type NewsletterSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscriptions to delete
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription without action
   */
  export type NewsletterSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
  }


  /**
   * Model ContactInquiry
   */

  export type AggregateContactInquiry = {
    _count: ContactInquiryCountAggregateOutputType | null
    _min: ContactInquiryMinAggregateOutputType | null
    _max: ContactInquiryMaxAggregateOutputType | null
  }

  export type ContactInquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInquiryCountAggregateOutputType = {
    id: number
    name: number
    phoneNumber: number
    email: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInquiryMinAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInquiryMaxAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInquiryCountAggregateInputType = {
    id?: true
    name?: true
    phoneNumber?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInquiry to aggregate.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInquiries
    **/
    _count?: true | ContactInquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInquiryMaxAggregateInputType
  }

  export type GetContactInquiryAggregateType<T extends ContactInquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInquiry[P]>
      : GetScalarType<T[P], AggregateContactInquiry[P]>
  }




  export type ContactInquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInquiryWhereInput
    orderBy?: ContactInquiryOrderByWithAggregationInput | ContactInquiryOrderByWithAggregationInput[]
    by: ContactInquiryScalarFieldEnum[] | ContactInquiryScalarFieldEnum
    having?: ContactInquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInquiryCountAggregateInputType | true
    _min?: ContactInquiryMinAggregateInputType
    _max?: ContactInquiryMaxAggregateInputType
  }

  export type ContactInquiryGroupByOutputType = {
    id: string
    name: string
    phoneNumber: string
    email: string | null
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactInquiryCountAggregateOutputType | null
    _min: ContactInquiryMinAggregateOutputType | null
    _max: ContactInquiryMaxAggregateOutputType | null
  }

  type GetContactInquiryGroupByPayload<T extends ContactInquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInquiryGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInquiryGroupByOutputType[P]>
        }
      >
    >


  export type ContactInquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInquiry"]>

  export type ContactInquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInquiry"]>

  export type ContactInquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInquiry"]>

  export type ContactInquirySelectScalar = {
    id?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneNumber" | "email" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInquiry"]>

  export type $ContactInquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phoneNumber: string
      email: string | null
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInquiry"]>
    composites: {}
  }

  type ContactInquiryGetPayload<S extends boolean | null | undefined | ContactInquiryDefaultArgs> = $Result.GetResult<Prisma.$ContactInquiryPayload, S>

  type ContactInquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInquiryCountAggregateInputType | true
    }

  export interface ContactInquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInquiry'], meta: { name: 'ContactInquiry' } }
    /**
     * Find zero or one ContactInquiry that matches the filter.
     * @param {ContactInquiryFindUniqueArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInquiryFindUniqueArgs>(args: SelectSubset<T, ContactInquiryFindUniqueArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInquiryFindUniqueOrThrowArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindFirstArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInquiryFindFirstArgs>(args?: SelectSubset<T, ContactInquiryFindFirstArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindFirstOrThrowArgs} args - Arguments to find a ContactInquiry
     * @example
     * // Get one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInquiries
     * const contactInquiries = await prisma.contactInquiry.findMany()
     * 
     * // Get first 10 ContactInquiries
     * const contactInquiries = await prisma.contactInquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInquiryWithIdOnly = await prisma.contactInquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInquiryFindManyArgs>(args?: SelectSubset<T, ContactInquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInquiry.
     * @param {ContactInquiryCreateArgs} args - Arguments to create a ContactInquiry.
     * @example
     * // Create one ContactInquiry
     * const ContactInquiry = await prisma.contactInquiry.create({
     *   data: {
     *     // ... data to create a ContactInquiry
     *   }
     * })
     * 
     */
    create<T extends ContactInquiryCreateArgs>(args: SelectSubset<T, ContactInquiryCreateArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInquiries.
     * @param {ContactInquiryCreateManyArgs} args - Arguments to create many ContactInquiries.
     * @example
     * // Create many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInquiryCreateManyArgs>(args?: SelectSubset<T, ContactInquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInquiries and returns the data saved in the database.
     * @param {ContactInquiryCreateManyAndReturnArgs} args - Arguments to create many ContactInquiries.
     * @example
     * // Create many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInquiries and only return the `id`
     * const contactInquiryWithIdOnly = await prisma.contactInquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInquiry.
     * @param {ContactInquiryDeleteArgs} args - Arguments to delete one ContactInquiry.
     * @example
     * // Delete one ContactInquiry
     * const ContactInquiry = await prisma.contactInquiry.delete({
     *   where: {
     *     // ... filter to delete one ContactInquiry
     *   }
     * })
     * 
     */
    delete<T extends ContactInquiryDeleteArgs>(args: SelectSubset<T, ContactInquiryDeleteArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInquiry.
     * @param {ContactInquiryUpdateArgs} args - Arguments to update one ContactInquiry.
     * @example
     * // Update one ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInquiryUpdateArgs>(args: SelectSubset<T, ContactInquiryUpdateArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInquiries.
     * @param {ContactInquiryDeleteManyArgs} args - Arguments to filter ContactInquiries to delete.
     * @example
     * // Delete a few ContactInquiries
     * const { count } = await prisma.contactInquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInquiryDeleteManyArgs>(args?: SelectSubset<T, ContactInquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInquiryUpdateManyArgs>(args: SelectSubset<T, ContactInquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInquiries and returns the data updated in the database.
     * @param {ContactInquiryUpdateManyAndReturnArgs} args - Arguments to update many ContactInquiries.
     * @example
     * // Update many ContactInquiries
     * const contactInquiry = await prisma.contactInquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInquiries and only return the `id`
     * const contactInquiryWithIdOnly = await prisma.contactInquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactInquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInquiry.
     * @param {ContactInquiryUpsertArgs} args - Arguments to update or create a ContactInquiry.
     * @example
     * // Update or create a ContactInquiry
     * const contactInquiry = await prisma.contactInquiry.upsert({
     *   create: {
     *     // ... data to create a ContactInquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInquiry we want to update
     *   }
     * })
     */
    upsert<T extends ContactInquiryUpsertArgs>(args: SelectSubset<T, ContactInquiryUpsertArgs<ExtArgs>>): Prisma__ContactInquiryClient<$Result.GetResult<Prisma.$ContactInquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryCountArgs} args - Arguments to filter ContactInquiries to count.
     * @example
     * // Count the number of ContactInquiries
     * const count = await prisma.contactInquiry.count({
     *   where: {
     *     // ... the filter for the ContactInquiries we want to count
     *   }
     * })
    **/
    count<T extends ContactInquiryCountArgs>(
      args?: Subset<T, ContactInquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInquiryAggregateArgs>(args: Subset<T, ContactInquiryAggregateArgs>): Prisma.PrismaPromise<GetContactInquiryAggregateType<T>>

    /**
     * Group by ContactInquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInquiryGroupByArgs['orderBy'] }
        : { orderBy?: ContactInquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInquiry model
   */
  readonly fields: ContactInquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInquiry model
   */
  interface ContactInquiryFieldRefs {
    readonly id: FieldRef<"ContactInquiry", 'String'>
    readonly name: FieldRef<"ContactInquiry", 'String'>
    readonly phoneNumber: FieldRef<"ContactInquiry", 'String'>
    readonly email: FieldRef<"ContactInquiry", 'String'>
    readonly message: FieldRef<"ContactInquiry", 'String'>
    readonly createdAt: FieldRef<"ContactInquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInquiry findUnique
   */
  export type ContactInquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry findUniqueOrThrow
   */
  export type ContactInquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry findFirst
   */
  export type ContactInquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInquiries.
     */
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry findFirstOrThrow
   */
  export type ContactInquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter, which ContactInquiry to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInquiries.
     */
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry findMany
   */
  export type ContactInquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter, which ContactInquiries to fetch.
     */
    where?: ContactInquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInquiries to fetch.
     */
    orderBy?: ContactInquiryOrderByWithRelationInput | ContactInquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInquiries.
     */
    cursor?: ContactInquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInquiries.
     */
    skip?: number
    distinct?: ContactInquiryScalarFieldEnum | ContactInquiryScalarFieldEnum[]
  }

  /**
   * ContactInquiry create
   */
  export type ContactInquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInquiry.
     */
    data: XOR<ContactInquiryCreateInput, ContactInquiryUncheckedCreateInput>
  }

  /**
   * ContactInquiry createMany
   */
  export type ContactInquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInquiries.
     */
    data: ContactInquiryCreateManyInput | ContactInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInquiry createManyAndReturn
   */
  export type ContactInquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInquiries.
     */
    data: ContactInquiryCreateManyInput | ContactInquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInquiry update
   */
  export type ContactInquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInquiry.
     */
    data: XOR<ContactInquiryUpdateInput, ContactInquiryUncheckedUpdateInput>
    /**
     * Choose, which ContactInquiry to update.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry updateMany
   */
  export type ContactInquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInquiries.
     */
    data: XOR<ContactInquiryUpdateManyMutationInput, ContactInquiryUncheckedUpdateManyInput>
    /**
     * Filter which ContactInquiries to update
     */
    where?: ContactInquiryWhereInput
    /**
     * Limit how many ContactInquiries to update.
     */
    limit?: number
  }

  /**
   * ContactInquiry updateManyAndReturn
   */
  export type ContactInquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * The data used to update ContactInquiries.
     */
    data: XOR<ContactInquiryUpdateManyMutationInput, ContactInquiryUncheckedUpdateManyInput>
    /**
     * Filter which ContactInquiries to update
     */
    where?: ContactInquiryWhereInput
    /**
     * Limit how many ContactInquiries to update.
     */
    limit?: number
  }

  /**
   * ContactInquiry upsert
   */
  export type ContactInquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInquiry to update in case it exists.
     */
    where: ContactInquiryWhereUniqueInput
    /**
     * In case the ContactInquiry found by the `where` argument doesn't exist, create a new ContactInquiry with this data.
     */
    create: XOR<ContactInquiryCreateInput, ContactInquiryUncheckedCreateInput>
    /**
     * In case the ContactInquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInquiryUpdateInput, ContactInquiryUncheckedUpdateInput>
  }

  /**
   * ContactInquiry delete
   */
  export type ContactInquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
    /**
     * Filter which ContactInquiry to delete.
     */
    where: ContactInquiryWhereUniqueInput
  }

  /**
   * ContactInquiry deleteMany
   */
  export type ContactInquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInquiries to delete
     */
    where?: ContactInquiryWhereInput
    /**
     * Limit how many ContactInquiries to delete.
     */
    limit?: number
  }

  /**
   * ContactInquiry without action
   */
  export type ContactInquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInquiry
     */
    select?: ContactInquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInquiry
     */
    omit?: ContactInquiryOmit<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    name: 'name',
    image: 'image',
    role: 'role',
    roleExplicitlyChosen: 'roleExplicitlyChosen',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    status: 'status',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const AdmissionInquiryScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    parentName: 'parentName',
    numberOfChildren: 'numberOfChildren',
    desiredClasses: 'desiredClasses',
    admissionType: 'admissionType',
    streams: 'streams',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdmissionInquiryScalarFieldEnum = (typeof AdmissionInquiryScalarFieldEnum)[keyof typeof AdmissionInquiryScalarFieldEnum]


  export const AlumniRegistrationScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    graduationYear: 'graduationYear',
    course: 'course',
    profession: 'profession',
    company: 'company',
    address: 'address',
    city: 'city',
    country: 'country',
    bio: 'bio',
    socialLinks: 'socialLinks',
    interests: 'interests',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlumniRegistrationScalarFieldEnum = (typeof AlumniRegistrationScalarFieldEnum)[keyof typeof AlumniRegistrationScalarFieldEnum]


  export const NewsletterSubscriptionScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    graduationYear: 'graduationYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsletterSubscriptionScalarFieldEnum = (typeof NewsletterSubscriptionScalarFieldEnum)[keyof typeof NewsletterSubscriptionScalarFieldEnum]


  export const ContactInquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneNumber: 'phoneNumber',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInquiryScalarFieldEnum = (typeof ContactInquiryScalarFieldEnum)[keyof typeof ContactInquiryScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AdmissionType'
   */
  export type EnumAdmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionType'>
    


  /**
   * Reference to a field of type 'AdmissionType[]'
   */
  export type ListEnumAdmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    roleExplicitlyChosen?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    techers?: TeacherListRelationFilter
    articles?: ArticleListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    roleExplicitlyChosen?: SortOrder
    createdAt?: SortOrder
    techers?: TeacherOrderByRelationAggregateInput
    articles?: ArticleOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    roleExplicitlyChosen?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    techers?: TeacherListRelationFilter
    articles?: ArticleListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    roleExplicitlyChosen?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    roleExplicitlyChosen?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    subject?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    phone?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    userId?: StringNullableFilter<"Teacher"> | string | null
    articles?: ArticleListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    subject?: StringFilter<"Teacher"> | string
    phone?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    userId?: StringNullableFilter<"Teacher"> | string | null
    articles?: ArticleListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    subject?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    phone?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    status?: StringFilter<"Article"> | string
    teacherId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringNullableFilter<"Article"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    status?: StringFilter<"Article"> | string
    teacherId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringNullableFilter<"Article"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    content?: StringWithAggregatesFilter<"Article"> | string
    status?: StringWithAggregatesFilter<"Article"> | string
    teacherId?: StringNullableWithAggregatesFilter<"Article"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Article"> | string | null
  }

  export type AdmissionInquiryWhereInput = {
    AND?: AdmissionInquiryWhereInput | AdmissionInquiryWhereInput[]
    OR?: AdmissionInquiryWhereInput[]
    NOT?: AdmissionInquiryWhereInput | AdmissionInquiryWhereInput[]
    id?: StringFilter<"AdmissionInquiry"> | string
    phoneNumber?: StringFilter<"AdmissionInquiry"> | string
    parentName?: StringFilter<"AdmissionInquiry"> | string
    numberOfChildren?: IntFilter<"AdmissionInquiry"> | number
    desiredClasses?: StringNullableListFilter<"AdmissionInquiry">
    admissionType?: EnumAdmissionTypeFilter<"AdmissionInquiry"> | $Enums.AdmissionType
    streams?: StringNullableListFilter<"AdmissionInquiry">
    createdAt?: DateTimeFilter<"AdmissionInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionInquiry"> | Date | string
  }

  export type AdmissionInquiryOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    parentName?: SortOrder
    numberOfChildren?: SortOrder
    desiredClasses?: SortOrder
    admissionType?: SortOrder
    streams?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionInquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdmissionInquiryWhereInput | AdmissionInquiryWhereInput[]
    OR?: AdmissionInquiryWhereInput[]
    NOT?: AdmissionInquiryWhereInput | AdmissionInquiryWhereInput[]
    phoneNumber?: StringFilter<"AdmissionInquiry"> | string
    parentName?: StringFilter<"AdmissionInquiry"> | string
    numberOfChildren?: IntFilter<"AdmissionInquiry"> | number
    desiredClasses?: StringNullableListFilter<"AdmissionInquiry">
    admissionType?: EnumAdmissionTypeFilter<"AdmissionInquiry"> | $Enums.AdmissionType
    streams?: StringNullableListFilter<"AdmissionInquiry">
    createdAt?: DateTimeFilter<"AdmissionInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionInquiry"> | Date | string
  }, "id">

  export type AdmissionInquiryOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    parentName?: SortOrder
    numberOfChildren?: SortOrder
    desiredClasses?: SortOrder
    admissionType?: SortOrder
    streams?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmissionInquiryCountOrderByAggregateInput
    _avg?: AdmissionInquiryAvgOrderByAggregateInput
    _max?: AdmissionInquiryMaxOrderByAggregateInput
    _min?: AdmissionInquiryMinOrderByAggregateInput
    _sum?: AdmissionInquirySumOrderByAggregateInput
  }

  export type AdmissionInquiryScalarWhereWithAggregatesInput = {
    AND?: AdmissionInquiryScalarWhereWithAggregatesInput | AdmissionInquiryScalarWhereWithAggregatesInput[]
    OR?: AdmissionInquiryScalarWhereWithAggregatesInput[]
    NOT?: AdmissionInquiryScalarWhereWithAggregatesInput | AdmissionInquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdmissionInquiry"> | string
    phoneNumber?: StringWithAggregatesFilter<"AdmissionInquiry"> | string
    parentName?: StringWithAggregatesFilter<"AdmissionInquiry"> | string
    numberOfChildren?: IntWithAggregatesFilter<"AdmissionInquiry"> | number
    desiredClasses?: StringNullableListFilter<"AdmissionInquiry">
    admissionType?: EnumAdmissionTypeWithAggregatesFilter<"AdmissionInquiry"> | $Enums.AdmissionType
    streams?: StringNullableListFilter<"AdmissionInquiry">
    createdAt?: DateTimeWithAggregatesFilter<"AdmissionInquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmissionInquiry"> | Date | string
  }

  export type AlumniRegistrationWhereInput = {
    AND?: AlumniRegistrationWhereInput | AlumniRegistrationWhereInput[]
    OR?: AlumniRegistrationWhereInput[]
    NOT?: AlumniRegistrationWhereInput | AlumniRegistrationWhereInput[]
    id?: StringFilter<"AlumniRegistration"> | string
    firstName?: StringFilter<"AlumniRegistration"> | string
    lastName?: StringFilter<"AlumniRegistration"> | string
    email?: StringFilter<"AlumniRegistration"> | string
    phone?: StringNullableFilter<"AlumniRegistration"> | string | null
    graduationYear?: StringFilter<"AlumniRegistration"> | string
    course?: StringNullableFilter<"AlumniRegistration"> | string | null
    profession?: StringNullableFilter<"AlumniRegistration"> | string | null
    company?: StringNullableFilter<"AlumniRegistration"> | string | null
    address?: StringNullableFilter<"AlumniRegistration"> | string | null
    city?: StringNullableFilter<"AlumniRegistration"> | string | null
    country?: StringNullableFilter<"AlumniRegistration"> | string | null
    bio?: StringNullableFilter<"AlumniRegistration"> | string | null
    socialLinks?: JsonNullableFilter<"AlumniRegistration">
    interests?: StringNullableFilter<"AlumniRegistration"> | string | null
    isVerified?: BoolFilter<"AlumniRegistration"> | boolean
    createdAt?: DateTimeFilter<"AlumniRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"AlumniRegistration"> | Date | string
  }

  export type AlumniRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    graduationYear?: SortOrder
    course?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AlumniRegistrationWhereInput | AlumniRegistrationWhereInput[]
    OR?: AlumniRegistrationWhereInput[]
    NOT?: AlumniRegistrationWhereInput | AlumniRegistrationWhereInput[]
    firstName?: StringFilter<"AlumniRegistration"> | string
    lastName?: StringFilter<"AlumniRegistration"> | string
    phone?: StringNullableFilter<"AlumniRegistration"> | string | null
    graduationYear?: StringFilter<"AlumniRegistration"> | string
    course?: StringNullableFilter<"AlumniRegistration"> | string | null
    profession?: StringNullableFilter<"AlumniRegistration"> | string | null
    company?: StringNullableFilter<"AlumniRegistration"> | string | null
    address?: StringNullableFilter<"AlumniRegistration"> | string | null
    city?: StringNullableFilter<"AlumniRegistration"> | string | null
    country?: StringNullableFilter<"AlumniRegistration"> | string | null
    bio?: StringNullableFilter<"AlumniRegistration"> | string | null
    socialLinks?: JsonNullableFilter<"AlumniRegistration">
    interests?: StringNullableFilter<"AlumniRegistration"> | string | null
    isVerified?: BoolFilter<"AlumniRegistration"> | boolean
    createdAt?: DateTimeFilter<"AlumniRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"AlumniRegistration"> | Date | string
  }, "id" | "email">

  export type AlumniRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    graduationYear?: SortOrder
    course?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlumniRegistrationCountOrderByAggregateInput
    _max?: AlumniRegistrationMaxOrderByAggregateInput
    _min?: AlumniRegistrationMinOrderByAggregateInput
  }

  export type AlumniRegistrationScalarWhereWithAggregatesInput = {
    AND?: AlumniRegistrationScalarWhereWithAggregatesInput | AlumniRegistrationScalarWhereWithAggregatesInput[]
    OR?: AlumniRegistrationScalarWhereWithAggregatesInput[]
    NOT?: AlumniRegistrationScalarWhereWithAggregatesInput | AlumniRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlumniRegistration"> | string
    firstName?: StringWithAggregatesFilter<"AlumniRegistration"> | string
    lastName?: StringWithAggregatesFilter<"AlumniRegistration"> | string
    email?: StringWithAggregatesFilter<"AlumniRegistration"> | string
    phone?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    graduationYear?: StringWithAggregatesFilter<"AlumniRegistration"> | string
    course?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    profession?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    company?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    address?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    city?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    country?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    bio?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"AlumniRegistration">
    interests?: StringNullableWithAggregatesFilter<"AlumniRegistration"> | string | null
    isVerified?: BoolWithAggregatesFilter<"AlumniRegistration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AlumniRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlumniRegistration"> | Date | string
  }

  export type NewsletterSubscriptionWhereInput = {
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    id?: StringFilter<"NewsletterSubscription"> | string
    firstName?: StringFilter<"NewsletterSubscription"> | string
    lastName?: StringFilter<"NewsletterSubscription"> | string
    email?: StringFilter<"NewsletterSubscription"> | string
    graduationYear?: StringFilter<"NewsletterSubscription"> | string
    createdAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
  }

  export type NewsletterSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    graduationYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    firstName?: StringFilter<"NewsletterSubscription"> | string
    lastName?: StringFilter<"NewsletterSubscription"> | string
    graduationYear?: StringFilter<"NewsletterSubscription"> | string
    createdAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"NewsletterSubscription"> | Date | string
  }, "id" | "email">

  export type NewsletterSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    graduationYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsletterSubscriptionCountOrderByAggregateInput
    _max?: NewsletterSubscriptionMaxOrderByAggregateInput
    _min?: NewsletterSubscriptionMinOrderByAggregateInput
  }

  export type NewsletterSubscriptionScalarWhereWithAggregatesInput = {
    AND?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    OR?: NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    firstName?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    lastName?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    email?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    graduationYear?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsletterSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsletterSubscription"> | Date | string
  }

  export type ContactInquiryWhereInput = {
    AND?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    OR?: ContactInquiryWhereInput[]
    NOT?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    id?: StringFilter<"ContactInquiry"> | string
    name?: StringFilter<"ContactInquiry"> | string
    phoneNumber?: StringFilter<"ContactInquiry"> | string
    email?: StringNullableFilter<"ContactInquiry"> | string | null
    message?: StringNullableFilter<"ContactInquiry"> | string | null
    createdAt?: DateTimeFilter<"ContactInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInquiry"> | Date | string
  }

  export type ContactInquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    OR?: ContactInquiryWhereInput[]
    NOT?: ContactInquiryWhereInput | ContactInquiryWhereInput[]
    name?: StringFilter<"ContactInquiry"> | string
    phoneNumber?: StringFilter<"ContactInquiry"> | string
    email?: StringNullableFilter<"ContactInquiry"> | string | null
    message?: StringNullableFilter<"ContactInquiry"> | string | null
    createdAt?: DateTimeFilter<"ContactInquiry"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInquiry"> | Date | string
  }, "id">

  export type ContactInquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInquiryCountOrderByAggregateInput
    _max?: ContactInquiryMaxOrderByAggregateInput
    _min?: ContactInquiryMinOrderByAggregateInput
  }

  export type ContactInquiryScalarWhereWithAggregatesInput = {
    AND?: ContactInquiryScalarWhereWithAggregatesInput | ContactInquiryScalarWhereWithAggregatesInput[]
    OR?: ContactInquiryScalarWhereWithAggregatesInput[]
    NOT?: ContactInquiryScalarWhereWithAggregatesInput | ContactInquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInquiry"> | string
    name?: StringWithAggregatesFilter<"ContactInquiry"> | string
    phoneNumber?: StringWithAggregatesFilter<"ContactInquiry"> | string
    email?: StringNullableWithAggregatesFilter<"ContactInquiry"> | string | null
    message?: StringNullableWithAggregatesFilter<"ContactInquiry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactInquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInquiry"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherCreateNestedManyWithoutUserInput
    articles?: ArticleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherUncheckedCreateNestedManyWithoutUserInput
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUpdateManyWithoutUserNestedInput
    articles?: ArticleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutTeacherInput
    User?: UserCreateNestedOneWithoutTechersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    articles?: ArticleUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutTeacherNestedInput
    User?: UserUpdateOneWithoutTechersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    articles?: ArticleUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher?: TeacherCreateNestedOneWithoutArticlesInput
    User?: UserCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    status?: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneWithoutArticlesNestedInput
    User?: UserUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    content: string
    status?: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionInquiryCreateInput = {
    id?: string
    phoneNumber: string
    parentName: string
    numberOfChildren: number
    desiredClasses?: AdmissionInquiryCreatedesiredClassesInput | string[]
    admissionType: $Enums.AdmissionType
    streams?: AdmissionInquiryCreatestreamsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionInquiryUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    parentName: string
    numberOfChildren: number
    desiredClasses?: AdmissionInquiryCreatedesiredClassesInput | string[]
    admissionType: $Enums.AdmissionType
    streams?: AdmissionInquiryCreatestreamsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionInquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    numberOfChildren?: IntFieldUpdateOperationsInput | number
    desiredClasses?: AdmissionInquiryUpdatedesiredClassesInput | string[]
    admissionType?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    streams?: AdmissionInquiryUpdatestreamsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionInquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    numberOfChildren?: IntFieldUpdateOperationsInput | number
    desiredClasses?: AdmissionInquiryUpdatedesiredClassesInput | string[]
    admissionType?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    streams?: AdmissionInquiryUpdatestreamsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionInquiryCreateManyInput = {
    id?: string
    phoneNumber: string
    parentName: string
    numberOfChildren: number
    desiredClasses?: AdmissionInquiryCreatedesiredClassesInput | string[]
    admissionType: $Enums.AdmissionType
    streams?: AdmissionInquiryCreatestreamsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionInquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    numberOfChildren?: IntFieldUpdateOperationsInput | number
    desiredClasses?: AdmissionInquiryUpdatedesiredClassesInput | string[]
    admissionType?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    streams?: AdmissionInquiryUpdatestreamsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionInquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    parentName?: StringFieldUpdateOperationsInput | string
    numberOfChildren?: IntFieldUpdateOperationsInput | number
    desiredClasses?: AdmissionInquiryUpdatedesiredClassesInput | string[]
    admissionType?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    streams?: AdmissionInquiryUpdatestreamsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniRegistrationCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    graduationYear: string
    course?: string | null
    profession?: string | null
    company?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniRegistrationUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    graduationYear: string
    course?: string | null
    profession?: string | null
    company?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: StringFieldUpdateOperationsInput | string
    course?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: StringFieldUpdateOperationsInput | string
    course?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniRegistrationCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    graduationYear: string
    course?: string | null
    profession?: string | null
    company?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    bio?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: StringFieldUpdateOperationsInput | string
    course?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: StringFieldUpdateOperationsInput | string
    course?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    graduationYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    graduationYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    graduationYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsletterSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    email?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInquiryUncheckedCreateInput = {
    id?: string
    name: string
    phoneNumber: string
    email?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryCreateManyInput = {
    id?: string
    name: string
    phoneNumber: string
    email?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    roleExplicitlyChosen?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    roleExplicitlyChosen?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    roleExplicitlyChosen?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAdmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionTypeFilter<$PrismaModel> | $Enums.AdmissionType
  }

  export type AdmissionInquiryCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    parentName?: SortOrder
    numberOfChildren?: SortOrder
    desiredClasses?: SortOrder
    admissionType?: SortOrder
    streams?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionInquiryAvgOrderByAggregateInput = {
    numberOfChildren?: SortOrder
  }

  export type AdmissionInquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    parentName?: SortOrder
    numberOfChildren?: SortOrder
    admissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionInquiryMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    parentName?: SortOrder
    numberOfChildren?: SortOrder
    admissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionInquirySumOrderByAggregateInput = {
    numberOfChildren?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAdmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumAdmissionTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AlumniRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    graduationYear?: SortOrder
    course?: SortOrder
    profession?: SortOrder
    company?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    socialLinks?: SortOrder
    interests?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    graduationYear?: SortOrder
    course?: SortOrder
    profession?: SortOrder
    company?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    interests?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    graduationYear?: SortOrder
    course?: SortOrder
    profession?: SortOrder
    company?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bio?: SortOrder
    interests?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type NewsletterSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    graduationYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    graduationYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsletterSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    graduationYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TeacherCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutUserInput | TeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutUserInput | TeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutUserInput | TeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput> | TeacherCreateWithoutUserInput[] | TeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput | TeacherCreateOrConnectWithoutUserInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutUserInput | TeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherCreateManyUserInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutUserInput | TeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutUserInput | TeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ArticleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput> | ArticleCreateWithoutTeacherInput[] | ArticleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTeacherInput | ArticleCreateOrConnectWithoutTeacherInput[]
    createMany?: ArticleCreateManyTeacherInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTechersInput = {
    create?: XOR<UserCreateWithoutTechersInput, UserUncheckedCreateWithoutTechersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechersInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput> | ArticleCreateWithoutTeacherInput[] | ArticleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTeacherInput | ArticleCreateOrConnectWithoutTeacherInput[]
    createMany?: ArticleCreateManyTeacherInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput> | ArticleCreateWithoutTeacherInput[] | ArticleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTeacherInput | ArticleCreateOrConnectWithoutTeacherInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutTeacherInput | ArticleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ArticleCreateManyTeacherInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutTeacherInput | ArticleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutTeacherInput | ArticleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTechersNestedInput = {
    create?: XOR<UserCreateWithoutTechersInput, UserUncheckedCreateWithoutTechersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechersInput
    upsert?: UserUpsertWithoutTechersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTechersInput, UserUpdateWithoutTechersInput>, UserUncheckedUpdateWithoutTechersInput>
  }

  export type ArticleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput> | ArticleCreateWithoutTeacherInput[] | ArticleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTeacherInput | ArticleCreateOrConnectWithoutTeacherInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutTeacherInput | ArticleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ArticleCreateManyTeacherInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutTeacherInput | ArticleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutTeacherInput | ArticleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutArticlesInput = {
    create?: XOR<TeacherCreateWithoutArticlesInput, TeacherUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutArticlesInput
    connect?: TeacherWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type TeacherUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<TeacherCreateWithoutArticlesInput, TeacherUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutArticlesInput
    upsert?: TeacherUpsertWithoutArticlesInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutArticlesInput, TeacherUpdateWithoutArticlesInput>, TeacherUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type AdmissionInquiryCreatedesiredClassesInput = {
    set: string[]
  }

  export type AdmissionInquiryCreatestreamsInput = {
    set: string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdmissionInquiryUpdatedesiredClassesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumAdmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionType
  }

  export type AdmissionInquiryUpdatestreamsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionTypeFilter<$PrismaModel> | $Enums.AdmissionType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionType[] | ListEnumAdmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumAdmissionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TeacherCreateWithoutUserInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateManyUserInputEnvelope = {
    data: TeacherCreateManyUserInput | TeacherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher?: TeacherCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    status?: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithWhereUniqueWithoutUserInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutUserInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateManyWithWhereWithoutUserInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutUserInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    subject?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    phone?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    userId?: StringNullableFilter<"Teacher"> | string | null
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    status?: StringFilter<"Article"> | string
    teacherId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringNullableFilter<"Article"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ArticleCreateWithoutTeacherInput = {
    id?: string
    title: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ArticleCreateOrConnectWithoutTeacherInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput>
  }

  export type ArticleCreateManyTeacherInputEnvelope = {
    data: ArticleCreateManyTeacherInput | ArticleCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTechersInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechersInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechersInput, UserUncheckedCreateWithoutTechersInput>
  }

  export type ArticleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutTeacherInput, ArticleUncheckedUpdateWithoutTeacherInput>
    create: XOR<ArticleCreateWithoutTeacherInput, ArticleUncheckedCreateWithoutTeacherInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutTeacherInput, ArticleUncheckedUpdateWithoutTeacherInput>
  }

  export type ArticleUpdateManyWithWhereWithoutTeacherInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutTeacherInput>
  }

  export type UserUpsertWithoutTechersInput = {
    update: XOR<UserUpdateWithoutTechersInput, UserUncheckedUpdateWithoutTechersInput>
    create: XOR<UserCreateWithoutTechersInput, UserUncheckedCreateWithoutTechersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTechersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTechersInput, UserUncheckedUpdateWithoutTechersInput>
  }

  export type UserUpdateWithoutTechersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeacherCreateWithoutArticlesInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutTechersInput
  }

  export type TeacherUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TeacherCreateOrConnectWithoutArticlesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutArticlesInput, TeacherUncheckedCreateWithoutArticlesInput>
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type TeacherUpsertWithoutArticlesInput = {
    update: XOR<TeacherUpdateWithoutArticlesInput, TeacherUncheckedUpdateWithoutArticlesInput>
    create: XOR<TeacherCreateWithoutArticlesInput, TeacherUncheckedCreateWithoutArticlesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutArticlesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutArticlesInput, TeacherUncheckedUpdateWithoutArticlesInput>
  }

  export type TeacherUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutTechersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherCreateNestedManyWithoutUserInput
    articles?: ArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    name: string
    image?: string
    role?: $Enums.Role
    roleExplicitlyChosen?: boolean
    createdAt?: Date | string
    techers?: TeacherUncheckedCreateNestedManyWithoutUserInput
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUpdateManyWithoutUserNestedInput
    articles?: ArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    roleExplicitlyChosen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techers?: TeacherUncheckedUpdateManyWithoutUserNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeacherCreateManyUserInput = {
    id?: string
    name: string
    subject: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateManyUserInput = {
    id?: string
    title: string
    content: string
    status?: string
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyTeacherInput = {
    id?: string
    title: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ArticleUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}