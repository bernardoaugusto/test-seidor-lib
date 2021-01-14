export interface RequestGetAllInterface {
    withPagination?: string;
    showInactive?: string;
    page?: string;
    size?: string;
    sortParam?: string;
    sortOrder?: string;
    dateFilter?: string;
    startDateFilter?: string;
    endDateFilter?: string;
    updated_by_name?: string;
    updated_by_email?: string;
    created_by_name?: string;
    created_by_email?: string;
}

export interface OptionsTypeOrmGetAll extends GetAllWithoutPagination {
    take: number;
    skip: number;
}

export interface GetAllWithoutPagination {
    where: Record<string, unknown>;
    order: {
        created_at?: 'DESC' | 'ASC';
    };
    orderBy: {
        columnName: string;
        order: 'DESC' | 'ASC';
    };
}
