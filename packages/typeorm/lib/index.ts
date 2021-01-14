// // Response GetALl

// import { buildSortParams, getPaginationParams } from '../paginate';
// import { OptionsTypeOrmGetAll, RequestGetAllInterface } from './interfaces';
// import { dynamicFilter } from './dynamicFilter';

// export const sum = (x: number, y: number): number => {
//     return x + y;
// };

// export const buildResponseGetAll = <T>(
//     queryParams: T & RequestGetAllInterface,
//     inactive = false,
//     tenantid?: string,
// ): OptionsTypeOrmGetAll => {
//     const { take, skip } = getPaginationParams(queryParams);
//     const { sortParam, sortOrder } = buildSortParams(queryParams);

//     const query = { ...queryParams };

//     const where = tenantid
//         ? dynamicFilter(query, inactive, tenantid)
//         : dynamicFilter(query, inactive);

//     const build: OptionsTypeOrmGetAll = {
//         where,
//         order: { [sortParam]: `${sortOrder}` },
//         take,
//         skip,
//         orderBy: {
//             columnName: sortParam,
//             order: <'DESC' | 'ASC'>`${sortOrder}`,
//         },
//     };

//     if (!inactive) build.where.active = true;
//     if (tenantid) build.where.tenantid = tenantid;

//     return build;
// };
