export interface OrderApiRequest {
    Crust: string;
    Flavor: string;
    Size: string;
    Table_No: number;
}

export interface OrderAPIResponse {
    Crust: string,
    Flavor: string,
    Order_ID: number,
    Size: string,
    Table_No: number;
    Timestamp: string;
}

export interface OrderUI {
    crust: string;
    flavor: string;
    orderId: number;
    size: string;
    tableNo: number;
    timestamp: string;
}
