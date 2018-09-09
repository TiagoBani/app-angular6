export class Funcionario {

    constructor(
        public id_funcionario: String ,
        public senha:          String ,
        public matricula:      String ,
        public nome:           String ,
        public nascimento:     String ,
        public filial:         String ,
        public perfil:         any
    ) {
        this.perfil = [];
    }
}
