import {
    buildSortParams,
    getPaginationParams,
    formatPaginateDataToResponse,
} from './paginate';
import {
    GetAllWithoutPagination,
    OptionsTypeOrmGetAll,
    RequestGetAllInterface,
} from './interfaces';
import { dynamicFilter } from './filter';

const formatParamsToTypeOrmOptionsWithoutPaginate = <T>(
    queryParams: T & RequestGetAllInterface,
    inactive = false,
    tenantid?: string,
): GetAllWithoutPagination => {
    const { sortParam, sortOrder } = buildSortParams(queryParams);

    const query = { ...queryParams };

    const where = tenantid
        ? dynamicFilter(query, inactive, tenantid)
        : dynamicFilter(query, inactive);

    const build: GetAllWithoutPagination = {
        where,
        order: { [sortParam]: `${sortOrder}` },
        orderBy: {
            columnName: sortParam,
            order: <'DESC' | 'ASC'>`${sortOrder}`,
        },
    };

    if (!inactive) build.where.active = true;
    if (tenantid) build.where.tenantid = tenantid;

    return build;
};

const formatParamsToTypeOrmOptionsWithPaginate = <T>(
    queryParams: T & RequestGetAllInterface,
    inactive = false,
    tenantid?: string,
): OptionsTypeOrmGetAll => {
    const build = formatParamsToTypeOrmOptionsWithoutPaginate(
        queryParams,
        inactive,
        tenantid,
    );

    const { take, skip } = getPaginationParams(queryParams);

    return {
        ...build,
        take,
        skip,
    };
};

export {
    formatParamsToTypeOrmOptionsWithoutPaginate,
    formatParamsToTypeOrmOptionsWithPaginate,
    formatPaginateDataToResponse,
};
