export interface SupportHandler {
  setNextHandler(handler: SupportHandler): SupportHandler;
  handleRequest(request: string): string | null;
}

export interface Support {
  handleRequest(request: string): string | null;
}
