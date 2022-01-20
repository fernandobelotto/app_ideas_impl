export interface Response {
    page: Page;
    components: Component[];
    incidents: any[];
    scheduled_maintenances: any[];
    status: Status;
}

export interface Status {
    indicator: string;
    description: string;
}

export interface Component {
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    position: number;
    description?: string;
    showcase: boolean;
    start_date?: string;
    group_id?: any;
    page_id: string;
    group: boolean;
    only_show_if_degraded: boolean;
}

export interface Page {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
}