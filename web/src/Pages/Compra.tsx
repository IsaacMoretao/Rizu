import Famili from "../assets/Familia.png";

export function Compra(){
  return(
    <div className="flex justify-center items-center main background">
      <div
      className="flex justify-center items-center flex-col w-[70%]
      bg-transparentBlack rounded-xl text-white pt-10">
        <strong className="text-2xl">
          Não foi possivel Realizar a compra!
        </strong>
        <p className="text-center p-5">
          Este site foi criado para fins pessoais, não é possível fazer compras. <br />
          Agradecemos o seu interesse pelo site. Se tiver qualquer desejo de entrar em contato,
          <a href="" className="text-green-400 hover:text-green-300 text font-bold"> Click Aqui</a>.
        </p>
        <img
          src={Famili}
          alt="Uma familia Feliz"
          className="w-[70%]"
        />
      </div>
    </div>
  )
}