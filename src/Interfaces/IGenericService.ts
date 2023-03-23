interface IGenericService<I, D> {
  create(dto: I): Promise<D>;
  getall(): Promise<D[]>;
  getid(id: string): Promise<D>;
  update(id: string, dto: I): Promise<D>;
  delete(id: string): Promise<void>;
}

export default IGenericService;
