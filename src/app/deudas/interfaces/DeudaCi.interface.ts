export interface DeudaCI {
    id?:                number;
    persona_id?:        number;
    fecha_creacion?:    Date;
    fecha_vencimiento?: Date;
    pagado?:            boolean;
    name?:              string;
    titulo?:            string;
    total?:             number;
}
