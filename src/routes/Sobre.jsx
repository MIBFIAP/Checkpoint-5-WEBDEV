import Logo from '../assets/Logo1.png';
import "../estilos/Sobre.css"
import restaurante from '../assets/restaurante.jpg'

import arthur from '../assets/arthur.jpg'
import miguel from '../assets/miguel.jpg'
import joao from '../assets/joao.jpg'
import sorriso from '../assets/sorriso.jpg'
import marcio from '../assets/marcio.jpg'

function Sobre(){
    return(
        <>
          <div className="logo_sobre">
            <img src={Logo} alt="Logo"></img>
            <h1>La Muerte</h1>
          </div>

          <div className="mexico">
            <div className="img_conteudo">
                <img src={restaurante} alt='mexico'></img>
            </div>
            <div className="conteudo">
                <h1 className='titulo_texto'>Quem Somos</h1>
                <p className='sobre_sub'> Há mais de uma década, o Restaurante La Morte tem se destacado na cena culinária local, proporcionando uma experiência única e autêntica da vibrante culinária mexicana. Inspirados pela rica tradição gastronômica do México e pelo fascinante Dia dos Mortos, nosso restaurante é o destino ideal para os amantes de pratos picantes e sabores intensos.<br></br>
                    Fundado há mais de 10 anos, o Restaurante La Morte surgiu da paixão por celebrar a herança culinária do México e honrar a tradição do Dia dos Mortos. Essa festa cultural única é uma homenagem aos entes queridos que já se foram, marcada por cores vibrantes, altares decorados e comidas incrivelmente saborosas. Inspirados por esse evento, decidimos criar um local que não apenas servisse pratos picantes, mas que também celebrasse a riqueza cultural do México.<br></br>
                    Nosso restaurante é renomado por ser o lugar onde os amantes de sabores ardentes encontram a satisfação perfeita. Oferecemos uma ampla variedade de pratos picantes, desde molhos de pimenta exclusivos até pratos tradicionais, como tamales, tacos, enchiladas e guacamole. Nossa paixão por ingredientes frescos, combinados com uma seleção de pimentas e especiarias, cria pratos que são verdadeiras explosões de sabor e calor.<br></br>
                </p>
            </div>
        </div>
            
        <h1 className='sobre_titulo'>Equipe</h1>
            <div className="sobre_desenvolvedores">
                

                <div className="nome_desenvolvedores">
                    <h1 className='nome'>Arthur</h1>
                    <h2 className='funcao'>CEO</h2>
                    <div className="img_conteudo">
                        <img className="img_perfil" src={arthur} alt='arthur'></img>
                    </div>
                </div>

                <div className="nome_desenvolvedores"> 
                    <h1 className='nome'>Marcio</h1>
                    <h2 className='funcao'>Analista de dados</h2>
                    <div className="img_conteudo">
                        <img className="img_perfil" src={marcio} alt='marcio'></img>
                    </div>
                </div>

                <div className="nome_desenvolvedores">
                    <h1 className='nome'>Joao</h1>
                    <h2 className='funcao'>Designer</h2>
                    <div className="img_conteudo">
                        <img className="img_perfil" src={joao} alt='joao'></img>
                    </div>
                </div>

                <div className="nome_desenvolvedores">
                    <h1 className='nome'>Sorriso</h1>
                    <h2 className='funcao'>Security</h2>
                    <div className="img_conteudo">
                        <img className="img_perfil" src={sorriso} alt='sorriso'></img>
                    </div>
                </div>

                <div className="nome_desenvolvedores">
                    <h1 className='nome'>Miguel</h1>
                    <h2 className='funcao'>C#</h2>
                    <div className="img_conteudo">
                        <img className="img_perfil" src={miguel} alt='miguel'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre