class User {
    public id: string;
    public email: string;
    public name: string;
    public password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const usuario = new User("1", "mat@email.com", "matheus", "123456")

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const usuario2 = new User("5", "mat@email.com", "matheus", "123456")
  class Users {
	// demais implementações

	public interoduceYourself(): string {
	   return "Olá, bom dia!"
	}
}

const customer = new Customer("5", "mat@email.com", "matheus", "123456", "10") 
customer.introduceYourself()

class Usuarios {
    name: any;
	// demais implementações

	public interoduceYourself(): string {
			return `Olá, sou ${this.name}. Bom dia!`;
	}
}
