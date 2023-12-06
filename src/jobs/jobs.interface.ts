export default interface AgendaJob {
  name: string;
  run(): Promise<void>;
}
