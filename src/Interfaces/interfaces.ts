export interface IEvent {
    id: number,
    name: string,
    event_image: string,
    description: string,
    capacity: number,
    location: string,
    creator_wallet_address: string,
    contract_address: string,
    ticket_price: number,
    duration: number,
    date: string,
    created_at: string,
    updated_at: string,
    expired: false,
}

export interface ITicket {
    
}