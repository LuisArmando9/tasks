export interface IMapper<E, D> {
    toEntity(dto: D):E;
    toDto(entity: E):D;
}
