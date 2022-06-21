export interface Driver {
  // properties are always public, they cannot be private
  database: string;
  password: string;
  port: number;

  // methods to implement
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 1
// }

// similar to Java
// the constructor needs to initialize all properties of the interface
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    // here we can add the private properties
    private host: number,
  ) {}

  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    // code here
    return true;
  }

  connect(): void {
    // code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    // code here
    return true;
  }

  connect(): void {
    // code
  }
}
