export interface Deuda {
    id?:                number;
    persona_id?:        number;
    titulo?:            string;
    fecha_creacion?:    Date;
    fecha_vencimiento?: Date;
    total?:             number;
    pagado?:            boolean;
}
