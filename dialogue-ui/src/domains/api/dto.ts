export abstract class DTOEnvelope<DTO, Local> {
  constructor(
    protected data: {
      dto?: DTO;
      local?: Local;
    },
  ) {}

  get dto() {
    return this.data.dto;
  }

  get local() {
    return this.data.local;
  }

  abstract asLocal(): Local;
  abstract asDTO(): DTO;
}
