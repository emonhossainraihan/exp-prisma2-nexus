/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  ProductCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    variants?: NexusGenInputs['VariantCreateManyWithoutProductInput'] | null; // VariantCreateManyWithoutProductInput
  }
  ProductCreateOneWithoutVariantsInput: { // input type
    connect?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProductCreateOrConnectWithoutVariantInput'] | null; // ProductCreateOrConnectWithoutVariantInput
    create?: NexusGenInputs['ProductCreateWithoutVariantsInput'] | null; // ProductCreateWithoutVariantsInput
  }
  ProductCreateOrConnectWithoutVariantInput: { // input type
    create: NexusGenInputs['ProductCreateWithoutVariantsInput']; // ProductCreateWithoutVariantsInput!
    where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
  }
  ProductCreateWithoutVariantsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  ProductUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    variants?: NexusGenInputs['VariantUpdateManyWithoutProductInput'] | null; // VariantUpdateManyWithoutProductInput
  }
  ProductUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  ProductUpdateOneRequiredWithoutVariantsInput: { // input type
    connect?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProductCreateOrConnectWithoutVariantInput'] | null; // ProductCreateOrConnectWithoutVariantInput
    create?: NexusGenInputs['ProductCreateWithoutVariantsInput'] | null; // ProductCreateWithoutVariantsInput
    update?: NexusGenInputs['ProductUpdateWithoutVariantsDataInput'] | null; // ProductUpdateWithoutVariantsDataInput
    upsert?: NexusGenInputs['ProductUpsertWithoutVariantsInput'] | null; // ProductUpsertWithoutVariantsInput
  }
  ProductUpdateWithoutVariantsDataInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  ProductUpsertWithoutVariantsInput: { // input type
    create: NexusGenInputs['ProductCreateWithoutVariantsInput']; // ProductCreateWithoutVariantsInput!
    update: NexusGenInputs['ProductUpdateWithoutVariantsDataInput']; // ProductUpdateWithoutVariantsDataInput!
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    variants?: NexusGenInputs['VariantListRelationFilter'] | null; // VariantListRelationFilter
  }
  ProductWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  VariantCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    name: string; // String!
    product: NexusGenInputs['ProductCreateOneWithoutVariantsInput']; // ProductCreateOneWithoutVariantsInput!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  VariantCreateManyWithoutProductInput: { // input type
    connect?: NexusGenInputs['VariantWhereUniqueInput'][] | null; // [VariantWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['VariantCreateOrConnectWithoutProductInput'][] | null; // [VariantCreateOrConnectWithoutProductInput!]
    create?: NexusGenInputs['VariantCreateWithoutProductInput'][] | null; // [VariantCreateWithoutProductInput!]
  }
  VariantCreateOrConnectWithoutProductInput: { // input type
    create: NexusGenInputs['VariantCreateWithoutProductInput']; // VariantCreateWithoutProductInput!
    where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
  }
  VariantCreateWithoutProductInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  VariantListRelationFilter: { // input type
    every?: NexusGenInputs['VariantWhereInput'] | null; // VariantWhereInput
    none?: NexusGenInputs['VariantWhereInput'] | null; // VariantWhereInput
    some?: NexusGenInputs['VariantWhereInput'] | null; // VariantWhereInput
  }
  VariantScalarWhereInput: { // input type
    AND?: NexusGenInputs['VariantScalarWhereInput'][] | null; // [VariantScalarWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['VariantScalarWhereInput'][] | null; // [VariantScalarWhereInput!]
    OR?: NexusGenInputs['VariantScalarWhereInput'][] | null; // [VariantScalarWhereInput!]
    prodId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  VariantUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    product?: NexusGenInputs['ProductUpdateOneRequiredWithoutVariantsInput'] | null; // ProductUpdateOneRequiredWithoutVariantsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  VariantUpdateManyDataInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  VariantUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  VariantUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['VariantUpdateManyDataInput']; // VariantUpdateManyDataInput!
    where: NexusGenInputs['VariantScalarWhereInput']; // VariantScalarWhereInput!
  }
  VariantUpdateManyWithoutProductInput: { // input type
    connect?: NexusGenInputs['VariantWhereUniqueInput'][] | null; // [VariantWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['VariantCreateOrConnectWithoutProductInput'][] | null; // [VariantCreateOrConnectWithoutProductInput!]
    create?: NexusGenInputs['VariantCreateWithoutProductInput'][] | null; // [VariantCreateWithoutProductInput!]
    delete?: NexusGenInputs['VariantWhereUniqueInput'][] | null; // [VariantWhereUniqueInput!]
    deleteMany?: NexusGenInputs['VariantScalarWhereInput'][] | null; // [VariantScalarWhereInput!]
    disconnect?: NexusGenInputs['VariantWhereUniqueInput'][] | null; // [VariantWhereUniqueInput!]
    set?: NexusGenInputs['VariantWhereUniqueInput'][] | null; // [VariantWhereUniqueInput!]
    update?: NexusGenInputs['VariantUpdateWithWhereUniqueWithoutProductInput'][] | null; // [VariantUpdateWithWhereUniqueWithoutProductInput!]
    updateMany?: NexusGenInputs['VariantUpdateManyWithWhereNestedInput'][] | null; // [VariantUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['VariantUpsertWithWhereUniqueWithoutProductInput'][] | null; // [VariantUpsertWithWhereUniqueWithoutProductInput!]
  }
  VariantUpdateWithWhereUniqueWithoutProductInput: { // input type
    data: NexusGenInputs['VariantUpdateWithoutProductDataInput']; // VariantUpdateWithoutProductDataInput!
    where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
  }
  VariantUpdateWithoutProductDataInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  VariantUpsertWithWhereUniqueWithoutProductInput: { // input type
    create: NexusGenInputs['VariantCreateWithoutProductInput']; // VariantCreateWithoutProductInput!
    update: NexusGenInputs['VariantUpdateWithoutProductDataInput']; // VariantUpdateWithoutProductDataInput!
    where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
  }
  VariantWhereInput: { // input type
    AND?: NexusGenInputs['VariantWhereInput'][] | null; // [VariantWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['VariantWhereInput'][] | null; // [VariantWhereInput!]
    OR?: NexusGenInputs['VariantWhereInput'][] | null; // [VariantWhereInput!]
    prodId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  VariantWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Product: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: {};
  Variant: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    prodId: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DateTimeFieldUpdateOperationsInput: NexusGenInputs['DateTimeFieldUpdateOperationsInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  NestedDateTimeFilter: NexusGenInputs['NestedDateTimeFilter'];
  NestedIntFilter: NexusGenInputs['NestedIntFilter'];
  NestedStringFilter: NexusGenInputs['NestedStringFilter'];
  ProductCreateInput: NexusGenInputs['ProductCreateInput'];
  ProductCreateOneWithoutVariantsInput: NexusGenInputs['ProductCreateOneWithoutVariantsInput'];
  ProductCreateOrConnectWithoutVariantInput: NexusGenInputs['ProductCreateOrConnectWithoutVariantInput'];
  ProductCreateWithoutVariantsInput: NexusGenInputs['ProductCreateWithoutVariantsInput'];
  ProductUpdateInput: NexusGenInputs['ProductUpdateInput'];
  ProductUpdateManyMutationInput: NexusGenInputs['ProductUpdateManyMutationInput'];
  ProductUpdateOneRequiredWithoutVariantsInput: NexusGenInputs['ProductUpdateOneRequiredWithoutVariantsInput'];
  ProductUpdateWithoutVariantsDataInput: NexusGenInputs['ProductUpdateWithoutVariantsDataInput'];
  ProductUpsertWithoutVariantsInput: NexusGenInputs['ProductUpsertWithoutVariantsInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  ProductWhereUniqueInput: NexusGenInputs['ProductWhereUniqueInput'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  VariantCreateInput: NexusGenInputs['VariantCreateInput'];
  VariantCreateManyWithoutProductInput: NexusGenInputs['VariantCreateManyWithoutProductInput'];
  VariantCreateOrConnectWithoutProductInput: NexusGenInputs['VariantCreateOrConnectWithoutProductInput'];
  VariantCreateWithoutProductInput: NexusGenInputs['VariantCreateWithoutProductInput'];
  VariantListRelationFilter: NexusGenInputs['VariantListRelationFilter'];
  VariantScalarWhereInput: NexusGenInputs['VariantScalarWhereInput'];
  VariantUpdateInput: NexusGenInputs['VariantUpdateInput'];
  VariantUpdateManyDataInput: NexusGenInputs['VariantUpdateManyDataInput'];
  VariantUpdateManyMutationInput: NexusGenInputs['VariantUpdateManyMutationInput'];
  VariantUpdateManyWithWhereNestedInput: NexusGenInputs['VariantUpdateManyWithWhereNestedInput'];
  VariantUpdateManyWithoutProductInput: NexusGenInputs['VariantUpdateManyWithoutProductInput'];
  VariantUpdateWithWhereUniqueWithoutProductInput: NexusGenInputs['VariantUpdateWithWhereUniqueWithoutProductInput'];
  VariantUpdateWithoutProductDataInput: NexusGenInputs['VariantUpdateWithoutProductDataInput'];
  VariantUpsertWithWhereUniqueWithoutProductInput: NexusGenInputs['VariantUpsertWithWhereUniqueWithoutProductInput'];
  VariantWhereInput: NexusGenInputs['VariantWhereInput'];
  VariantWhereUniqueInput: NexusGenInputs['VariantWhereUniqueInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createOneProduct: NexusGenRootTypes['Product']; // Product!
    createOneVariant: NexusGenRootTypes['Variant']; // Variant!
    deleteManyProduct: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyVariant: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneProduct: NexusGenRootTypes['Product'] | null; // Product
    deleteOneVariant: NexusGenRootTypes['Variant'] | null; // Variant
    updateManyProduct: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyVariant: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneProduct: NexusGenRootTypes['Product'] | null; // Product
    updateOneVariant: NexusGenRootTypes['Variant'] | null; // Variant
    upsertOneProduct: NexusGenRootTypes['Product']; // Product!
    upsertOneVariant: NexusGenRootTypes['Variant']; // Variant!
  }
  Product: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    variants: NexusGenRootTypes['Variant'][]; // [Variant!]!
  }
  Query: { // field return type
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    variant: NexusGenRootTypes['Variant'] | null; // Variant
    variants: NexusGenRootTypes['Variant'][]; // [Variant!]!
  }
  Variant: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    name: string; // String!
    prodId: number; // Int!
    product: NexusGenRootTypes['Product']; // Product!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
    }
    createOneVariant: { // args
      data: NexusGenInputs['VariantCreateInput']; // VariantCreateInput!
    }
    deleteManyProduct: { // args
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    deleteManyVariant: { // args
      where?: NexusGenInputs['VariantWhereInput'] | null; // VariantWhereInput
    }
    deleteOneProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    deleteOneVariant: { // args
      where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
    }
    updateManyProduct: { // args
      data: NexusGenInputs['ProductUpdateManyMutationInput']; // ProductUpdateManyMutationInput!
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
    updateManyVariant: { // args
      data: NexusGenInputs['VariantUpdateManyMutationInput']; // VariantUpdateManyMutationInput!
      where?: NexusGenInputs['VariantWhereInput'] | null; // VariantWhereInput
    }
    updateOneProduct: { // args
      data: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    updateOneVariant: { // args
      data: NexusGenInputs['VariantUpdateInput']; // VariantUpdateInput!
      where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
    }
    upsertOneProduct: { // args
      create: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
      update: NexusGenInputs['ProductUpdateInput']; // ProductUpdateInput!
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    upsertOneVariant: { // args
      create: NexusGenInputs['VariantCreateInput']; // VariantCreateInput!
      update: NexusGenInputs['VariantUpdateInput']; // VariantUpdateInput!
      where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
    }
  }
  Product: {
    variants: { // args
      after?: NexusGenInputs['VariantWhereUniqueInput'] | null; // VariantWhereUniqueInput
      before?: NexusGenInputs['VariantWhereUniqueInput'] | null; // VariantWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    products: { // args
      after?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      before?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    variant: { // args
      where: NexusGenInputs['VariantWhereUniqueInput']; // VariantWhereUniqueInput!
    }
    variants: { // args
      after?: NexusGenInputs['VariantWhereUniqueInput'] | null; // VariantWhereUniqueInput
      before?: NexusGenInputs['VariantWhereUniqueInput'] | null; // VariantWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Mutation" | "Product" | "Query" | "Variant";

export type NexusGenInputNames = "DateTimeFieldUpdateOperationsInput" | "DateTimeFilter" | "IntFilter" | "NestedDateTimeFilter" | "NestedIntFilter" | "NestedStringFilter" | "ProductCreateInput" | "ProductCreateOneWithoutVariantsInput" | "ProductCreateOrConnectWithoutVariantInput" | "ProductCreateWithoutVariantsInput" | "ProductUpdateInput" | "ProductUpdateManyMutationInput" | "ProductUpdateOneRequiredWithoutVariantsInput" | "ProductUpdateWithoutVariantsDataInput" | "ProductUpsertWithoutVariantsInput" | "ProductWhereInput" | "ProductWhereUniqueInput" | "StringFieldUpdateOperationsInput" | "StringFilter" | "VariantCreateInput" | "VariantCreateManyWithoutProductInput" | "VariantCreateOrConnectWithoutProductInput" | "VariantCreateWithoutProductInput" | "VariantListRelationFilter" | "VariantScalarWhereInput" | "VariantUpdateInput" | "VariantUpdateManyDataInput" | "VariantUpdateManyMutationInput" | "VariantUpdateManyWithWhereNestedInput" | "VariantUpdateManyWithoutProductInput" | "VariantUpdateWithWhereUniqueWithoutProductInput" | "VariantUpdateWithoutProductDataInput" | "VariantUpsertWithWhereUniqueWithoutProductInput" | "VariantWhereInput" | "VariantWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { prisma: PrismaClient.PrismaClient };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}