export interface Pago {
    id?:         number;
    fecha_pago?: Date;
    deuda_id?:   number;
    persona_id?: number;
    monto?:      number;
}
