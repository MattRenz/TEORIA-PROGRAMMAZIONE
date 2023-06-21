

// Creazione classe
    class Docente{
        name: string;
    }

    // creazione my_docente di calsse Docente
    const my_docente = new Docente();
    my_docente.name = "Mario";

    const my_docente_2 = new Docente();
    my_docente_2.name = "Luca";


// Membri di visibilità 

    /*
     public- (impostazione predefinita) consente l'accesso al membro della classe da qualsiasi luogo
     private- consente solo l'accesso al membro della classe dall'interno della classe
     protected- consente l'accesso al membro della classe da se stesso e da tutte le classi che lo ereditano
    */

     class Person {
        private name: string;
      
        public constructor(name: string) {
          this.name = name;  // this si referisce all'istanza della classe
        }
      
        public getName(): string {
          return this.name;
        }
      }
      
      const persona1 = new Person("Marco");

      persona1.getName(); // <Marco>

    
// Ereditarietà implementata

      interface Scuola {
        StampaScuola: () => void;
      }

      class Studente implements Scuola {

        public constructor(protected readonly name: string, protected readonly luogo: string) {}

        public StampaScuola(): void {
            
            console.log(this.name + " " + this.luogo);
      }
    }

    const Scuola_1 = new Studente("Scuola Manzoni", "Roma");
    Scuola_1.StampaScuola(); // <Scuola Manzoni Roma>


// Ereditarietà estesa 


    interface Shape {
        getArea: () => number;
    }
    
    class Rectangle implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {}
    
        public getArea(): number {
        return this.width * this.height;
        }
    }
    
    class Square extends Rectangle {
        public constructor(width: number) {
        super(width, width);
        }
    
    }
        


    



