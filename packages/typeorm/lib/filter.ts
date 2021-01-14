// import { Between, FindOperator, Raw } from 'typeorm';
// import moment from 'moment';

// import { RequestGetAllInterface } from '../../interfaces/pagination';

// export const dynamicFilter = <T>(
//     data: T & RequestGetAllInterface,inactive = false, tenantid?: string,
// ): Record<string, unknown> => {
//     const { dateFilter, startDateFilter, endDateFilter } = data;

//     const queryParams = data;

//     if (queryParams.showInactive) delete queryParams.showInactive;
//     if (queryParams.withPagination) delete queryParams.withPagination;
//     if (queryParams.page) delete queryParams.page;
//     if (queryParams.size) delete queryParams.size;
//     if (queryParams.sortParam) delete queryParams.sortParam;
//     if (queryParams.sortOrder) delete queryParams.sortOrder;
//     if (queryParams.dateFilter) delete queryParams.dateFilter;
//     if (queryParams.startDateFilter) delete queryParams.startDateFilter;
//     if (queryParams.endDateFilter) delete queryParams.endDateFilter;

//     const queryDataEntries = Object.entries(data);

//     let query: Record<string, unknown> = {};

//     for (const [key, value] of queryDataEntries) {
//         query = {
//             ...query,
//             [key]: Raw(alias => `CAST(${alias} AS VARCHAR) ILIKE '%${value}%'`),
//         };
//     }

//     if (dateFilter && startDateFilter && endDateFilter)
//         query[dateFilter] = betweenDataFilter(startDateFilter, endDateFilter);

//     if (!inactive && tenantid) query.active = true;
//     if (tenantid) query.tenantid = tenantid;

//     return query;
// };

// export const betweenDataFilter = (
//     startDate: string,
//     endDate: string,
// ): FindOperator<moment.Moment> => {
//     return Between(
//         moment(startDate, 'YYYY-MM-DD').subtract(1, 'days'),
//         moment(endDate, 'YYYY-MM-DD').add(1, 'days'),
//     );
// };
