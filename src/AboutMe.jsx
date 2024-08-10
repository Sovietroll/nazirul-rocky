import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CSS.scss';


const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self learn developer","Graphic Designer", "Video Editor", "Motion Graphic"];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex => (prevIndex + 1) % titles.length))
    },3500);
  
    return() => {
      clearInterval(interval)
    }
  },[]);

const TitleStart  = () => {
  return (
    <MotionFlip>
      {titles[titleIndex]}
    </MotionFlip>
  )
 }

const thisYear = new Date().getFullYear();
const YearTotal = ({yearThen, yearAfter}) => {
  const total = yearThen - yearAfter;  
  const sum = Math.abs(total);
  return(sum)
}



  return ( 

    <div className={`about-me`}>
      <div className="about-me-one">
        <div className= 'about-me-one-desc'>
        <h1>Hi My name is</h1>

          <TransitionText >

            <div 
            className="about-me-one-desc-selftaught"
            >
              <TitleStart />
              {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
              </div> 

          </TransitionText>

          <TransitionText delay = {.5}>
              <p 
                style={{color: "grey"}}>Nazirul Syafiq bin Young Rockie.</p>
          </TransitionText> 
          </div>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>

              <img 
                src="src/images/me.jpg" 
                alt="head"
                style={{width: "350px",
                  borderRadius: "100%",
                  padding: "20px"
                }} 
              />

          </motion.div>
      </div>
        <p style={{fontSize: "25px",
          paddingLeft: "100px",
          paddingRight: "100px",
          marginTop: "50px",
          marginBottom: "50px"

        }}>
          Back in 2023, I decided to try to create my own custom website at WordPress just for fun. I literally went into an infinity hole of coding and web development. I instantly fell in love with it. Fast-forward to today, I still studying and learning to code various languages and tools in hope of becoming a <b>Front End Developer</b> and the end goal is <b>Full Stack Developer</b>.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia culpa, consequuntur inventore laudantium dolorum numquam vitae perferendis, fugit quaerat officiis similique ducimus distinctio voluptates rem quos. Esse earum pariatur voluptate reiciendis voluptatibus deserunt possimus vel optio aut laboriosam amet nihil fugit sed iure, obcaecati odit consequuntur nam tenetur, dolore nemo sequi facilis assumenda laborum. Aspernatur nulla ea corrupti totam unde doloremque tenetur nam fugit ut nihil soluta repudiandae deserunt temporibus consectetur minus ipsam, omnis corporis? Cumque eaque a, repellendus ab labore qui aperiam amet unde, mollitia facere dolore nesciunt ipsam? Laudantium iure ab placeat iste. Excepturi impedit, nisi labore odio quam blanditiis temporibus perspiciatis id nesciunt nulla, ullam vel numquam expedita maxime pariatur! Et ipsam magni nulla nemo aspernatur a laboriosam impedit aperiam velit nesciunt non maxime temporibus cum, tempora, nihil est. Mollitia impedit hic, eveniet quae perferendis quas expedita itaque quos fugiat temporibus animi repellat sunt minus, cumque quaerat incidunt perspiciatis aspernatur doloremque! Odit illo voluptatum sapiente ratione veritatis consequuntur doloremque deleniti soluta ad facilis numquam consequatur, esse dignissimos eius vel illum. Corporis, omnis ex aliquam architecto, corrupti placeat aut ipsa id ullam impedit nobis autem esse at, accusantium libero eligendi quis! Reprehenderit reiciendis dicta ipsam rerum eaque asperiores ullam doloribus itaque aut! Cum quibusdam perspiciatis adipisci ad ex voluptatibus rerum soluta modi tempora earum officia natus, quod saepe voluptate omnis, maxime nesciunt iure aliquam voluptas. Exercitationem iusto dolorem quod iste placeat maiores quisquam, unde fugit totam possimus sunt molestias id soluta sit labore eius, est quibusdam vitae. Et sint tempore deleniti nemo non! Dolor itaque molestias necessitatibus omnis veritatis neque? Iusto, fuga, voluptates ut quos excepturi, illum aspernatur perferendis vero at a vel? Dolorem quae autem, non porro ipsam provident quos nam ipsa aliquam commodi exercitationem laborum aperiam ipsum cum harum ullam. Aliquid dolores quam totam fuga esse neque fugit illo vitae ea possimus autem odio temporibus beatae incidunt quisquam quaerat, eius, voluptatem tenetur reprehenderit cupiditate perspiciatis officia nulla praesentium delectus. Quia quisquam iste sequi repellat officia fugit quos a laboriosam placeat omnis molestias, ea architecto optio, eos veritatis, harum at ullam. Enim unde veritatis accusantium fugit libero incidunt iusto in beatae quidem magni. Dignissimos illum tenetur rerum sunt enim ad quo voluptatibus, provident aliquid excepturi cumque quidem voluptate veritatis vero. Doloremque, quam autem aliquid, possimus dignissimos, ipsam sit fuga cumque quod similique distinctio! Nisi, autem omnis nam fugit consectetur culpa tenetur eius velit a, excepturi quaerat ratione tempore. Laudantium quos quis nesciunt cum quisquam, a aspernatur, provident in vel quo inventore. Necessitatibus aspernatur magni consectetur, eveniet vero ducimus ex in corporis rem, debitis dignissimos tempora rerum veniam! Nostrum corrupti officiis numquam! Impedit veniam qui quo accusamus quod inventore eligendi minus facere distinctio perspiciatis unde illo nihil maxime amet dolorum totam eius nostrum sapiente commodi dolor quas, alias cum? Quo ad aliquid nostrum, autem cum explicabo perspiciatis temporibus velit dolor blanditiis molestias ullam, repellat iusto alias sed voluptatem enim animi, doloribus dolorem sapiente qui tenetur accusamus possimus itaque? At harum non dolore ducimus porro labore similique? Aut quia reprehenderit soluta nostrum expedita omnis. Accusantium nihil dolorum facilis qui quod quaerat rem totam soluta, velit recusandae, tenetur debitis reprehenderit amet numquam, voluptatem inventore vero neque. Corporis voluptates molestiae consectetur harum, aliquid quidem eum dolor officia qui! Ipsam harum odit et maxime porro, cum ipsum omnis rem quasi veritatis fugiat hic dignissimos ad iusto magni. Ipsum vitae facilis dolorum magnam. Voluptate facilis vero labore atque laborum, quaerat error distinctio ipsum iusto officiis velit esse commodi asperiores quasi nulla culpa, repellendus, libero perferendis. Tempore, eius voluptatem mollitia explicabo reiciendis laudantium nostrum saepe fuga impedit cupiditate id aspernatur in distinctio reprehenderit vitae porro dolorum error consequatur autem nemo nisi. Aperiam, provident sint rem nostrum, odio impedit, cupiditate autem ipsam odit natus illum magnam rerum? Ratione quae magnam consectetur quod nihil neque, et ipsum autem. Blanditiis alias optio temporibus in cumque facilis accusamus accusantium minima, delectus quas nemo iste fugit amet possimus laudantium a molestiae, id nobis. Vel, laudantium. Soluta eius perspiciatis commodi sapiente eveniet cupiditate voluptas modi dolorum nisi optio, repellendus, amet est numquam tempora? Cumque, adipisci? Laborum odio a molestias tempore iure soluta ad perspiciatis? Est quibusdam maxime natus, consequuntur autem culpa quo rem illum unde nesciunt, fugit tempora consectetur nam error, nostrum laboriosam repellendus sint id! Similique consequatur error maiores quam repellendus labore quasi corrupti quo, quisquam totam animi dolorem tenetur quia natus ea, necessitatibus facilis reprehenderit ratione iusto at porro enim vitae? Voluptate dolore numquam ab commodi earum! Esse, nam quia? Iusto cum officiis architecto dolorum blanditiis labore porro illum obcaecati sequi sed sapiente officia ipsum nobis tempora ducimus mollitia, voluptatem aliquam consectetur corporis? Provident eum quo omnis laudantium necessitatibus rerum quasi ipsam odio minus, aliquam esse vitae quisquam ipsa delectus sit ea iusto commodi libero veniam consequatur reprehenderit similique suscipit asperiores! Reprehenderit neque vel repudiandae assumenda quam fugiat aperiam dolores dicta enim dolorem adipisci nulla temporibus odio delectus cupiditate libero veniam ducimus, a itaque sit. Magni labore illum, vel ipsam impedit deserunt culpa, commodi repudiandae atque itaque unde illo. Recusandae voluptates qui eveniet iure voluptatibus excepturi soluta veniam reprehenderit obcaecati explicabo illo amet tempore similique, assumenda dolorum ratione error officia quis omnis laudantium voluptas cum tempora! Ratione beatae porro eligendi aspernatur harum quo aliquam fugit itaque. Corporis quaerat animi assumenda! Nam, ut! Asperiores error, numquam explicabo facere alias voluptatibus tempora corporis perferendis eos. Quia voluptatum quidem officiis iure repellendus! Blanditiis distinctio in libero error nobis? Quidem dicta obcaecati sed vitae eos, accusantium vel id praesentium possimus quis nemo a nam culpa quam, officiis aliquid consequuntur laborum nostrum esse blanditiis dignissimos repellat molestias. Ut error eligendi inventore quia obcaecati eius corporis omnis hic quas amet quidem soluta consequatur odio eum laboriosam, iure dolores explicabo esse totam. Corrupti culpa non, nostrum laudantium ipsam possimus iste deserunt tempora eligendi illum placeat quasi rem debitis sapiente. Reprehenderit provident dignissimos suscipit omnis consequatur a minus vel dolorum accusantium. Quod, sed. Molestiae quaerat ipsam architecto, hic iusto quis cupiditate esse numquam aut, commodi mollitia delectus cum ex dolor praesentium facere deleniti ratione minus beatae optio, rem ipsum dignissimos? Incidunt nemo quaerat adipisci, voluptas, odit labore sapiente blanditiis esse, aliquid obcaecati ducimus rerum veniam ratione? Doloremque accusamus similique tempore sit error reiciendis harum eum aperiam dolore perferendis, molestias et sed itaque quidem, ipsum vero aut numquam impedit soluta distinctio? Libero optio numquam dolorum obcaecati rerum corporis ad nisi a est, dignissimos quas vitae voluptate enim impedit eum necessitatibus sequi tempore ut porro vel culpa assumenda dolorem excepturi reiciendis. Culpa veniam quam debitis id, accusamus veritatis, suscipit ad dolor sapiente distinctio consectetur sed itaque voluptas dicta. Ratione dicta modi asperiores quis! Qui, dolorum nobis dolores expedita repellat id perferendis vitae illo placeat? Minus qui similique beatae perferendis iusto dicta, deleniti non atque. Repudiandae corporis temporibus tenetur fugit minus. Laboriosam vero cum voluptates libero, sit repellat voluptas perspiciatis. Rerum, labore ut quam molestiae, exercitationem aliquam cum repellendus neque incidunt nostrum quod a vitae qui possimus illo dolorem hic tempore quaerat. Non, blanditiis cumque asperiores suscipit voluptates accusamus quidem sapiente maiores magnam modi quisquam cum obcaecati minus aspernatur. Pariatur blanditiis dicta mollitia dolore impedit sed necessitatibus iusto odio! Ullam quas dolore recusandae maiores culpa officiis, ad maxime veritatis, nesciunt, magnam repellendus? Iste ea, et doloremque facilis ut temporibus ad ducimus repudiandae nihil porro! Harum vitae totam nostrum neque! Eaque quo excepturi ea sit odit laudantium sequi quasi beatae voluptates, ut deleniti animi aut, omnis consequatur magnam, iste distinctio expedita ipsa enim. Quaerat consectetur cupiditate voluptates nam deleniti blanditiis dicta vel magnam iste, iusto aperiam incidunt sed nostrum fuga. Eius fugiat quae molestiae autem ex hic odio molestias iste quia quaerat suscipit labore ratione maiores ad veritatis mollitia, aliquam dolore. Accusamus debitis dolorem veniam itaque, soluta doloribus maiores sit, consequuntur quos laudantium quis, ut tempore harum. Libero suscipit cum officia natus, ea, vel sapiente ad repudiandae sint ullam esse debitis earum repellat voluptatum vero, alias culpa nobis! Ab atque inventore odit et dolor placeat ea ducimus quia provident maiores. Qui molestiae cupiditate aperiam dolor sunt doloribus neque corporis, minima ipsa soluta sint possimus officiis quia, deleniti nulla, distinctio numquam vitae deserunt unde? Temporibus, numquam. Repudiandae unde ab corporis id magnam omnis sequi laboriosam quasi earum quisquam quis facere maiores velit, molestias vel praesentium temporibus odit, hic, deleniti delectus reiciendis? Dolore consequuntur odio animi ex aut nostrum? Quae fugit quidem deleniti deserunt ab saepe est sit praesentium facilis alias at obcaecati cumque delectus, debitis officiis quasi nostrum eveniet reprehenderit aut quis expedita, itaque sed qui? Laboriosam velit architecto at. Nihil rem eligendi vitae quibusdam eos magni illum odit doloribus. Error mollitia quo neque magni tempore sint impedit ratione vitae repudiandae, itaque eveniet corrupti. Architecto, consequuntur aperiam sit quidem asperiores distinctio rerum doloribus nesciunt blanditiis quos! Explicabo illum blanditiis, neque saepe, libero eligendi, recusandae voluptatem quasi cumque labore at sunt ipsum maxime ad asperiores voluptate dignissimos esse quo placeat? Impedit et est, sint quis veritatis necessitatibus dolor quae voluptates cumque officiis suscipit itaque earum quos, explicabo reprehenderit, cupiditate enim quidem molestiae! Neque, sit distinctio eveniet quia architecto veritatis repellendus totam autem magnam ratione corporis hic nobis corrupti esse a officiis fugiat eligendi. Nesciunt veniam earum maiores rerum dolores suscipit dolore delectus porro, nostrum sint recusandae velit iste accusamus! Eveniet, minus! Rem facilis cupiditate fugit exercitationem quasi, id necessitatibus sapiente aliquam quis, molestias modi autem vitae accusamus odit quos reiciendis reprehenderit excepturi perspiciatis. Debitis tempora consequuntur ullam natus ad tempore, non laborum officiis labore vel numquam et at nihil totam fugiat similique voluptates harum maiores ipsum amet rem ducimus neque dicta voluptatum. Odio enim ipsum maxime magnam culpa odit eos aperiam tempore omnis libero ad sapiente dolores dolorem deserunt rerum sit sunt molestias, magni assumenda recusandae rem sed exercitationem! Sunt praesentium expedita dignissimos voluptates quisquam labore, pariatur totam, officiis, quos ullam inventore mollitia ducimus. Iusto eligendi, praesentium similique quis optio nesciunt consequatur facere autem corrupti veniam perspiciatis expedita quasi quas quo fugit eos, accusantium perferendis repellat natus placeat error? Esse beatae quos rerum, dicta fuga ullam nesciunt ex similique quam! Commodi quaerat impedit facilis soluta ullam exercitationem nihil, ipsum, incidunt atque eligendi sapiente ipsa. Dolore ratione beatae debitis distinctio nisi libero similique quia id illo. Corrupti libero ut eum impedit repellendus deleniti! Iste hic reiciendis nobis illum. Quam sapiente dignissimos illum at veritatis natus consectetur, ullam odio eligendi autem perspiciatis a tempore sed doloribus ratione doloremque veniam error aliquid quibusdam dicta distinctio. Tenetur vitae nemo quis incidunt rem at excepturi cumque iusto quod, quisquam, molestiae accusantium atque debitis libero. Est facilis omnis eos iusto ratione, nam et fugiat eum aperiam recusandae pariatur consequatur adipisci unde vel iure, nostrum mollitia. Asperiores laboriosam similique fugit tenetur repudiandae consequuntur temporibus placeat voluptatibus eos quas minima inventore, ad distinctio delectus officia officiis assumenda corporis quae ea ducimus! Beatae hic tempore, quis inventore sapiente, impedit, deleniti explicabo voluptates doloribus quasi id laborum enim dicta accusantium quo temporibus vitae. Modi ea illum enim eaque. Animi nesciunt exercitationem iste totam reiciendis accusantium minus, culpa quas dolor sunt, tempore incidunt. Ipsa, minus aliquam molestias mollitia provident nam. Nesciunt laboriosam ipsa quasi accusamus corporis qui asperiores dolor molestiae a quas ipsum consequuntur adipisci atque sequi possimus itaque ex, magni odio. Architecto, consectetur molestiae voluptas doloribus facere rerum corrupti deleniti nemo possimus voluptates magni voluptatibus dolores expedita animi suscipit pariatur nobis repudiandae laudantium voluptatum voluptatem in! Tenetur veniam, rem delectus temporibus optio alias qui similique accusamus aspernatur, sunt molestiae molestias explicabo at! Odio autem reprehenderit quod? Eligendi perspiciatis totam iste veniam. Dolore odit numquam architecto tempora nostrum atque laboriosam et veritatis eligendi ipsam debitis nisi accusantium facere a ipsa amet sed, fuga maiores molestiae minima id ratione, ea iste eos. Quia doloribus in debitis dolorum quasi iure animi magnam hic ipsam illo harum optio eveniet pariatur, voluptas nesciunt dignissimos asperiores doloremque ea autem, velit voluptate eum! Impedit inventore dignissimos quam voluptatibus cum fugiat molestias, perspiciatis praesentium, accusantium natus laboriosam quidem voluptate ipsa explicabo ipsam consequatur vitae eaque repudiandae saepe provident magnam iste quae. Molestias, quibusdam? Blanditiis, mollitia culpa. Nulla possimus, maiores atque perspiciatis rem quos voluptates tempora minus repudiandae tenetur, qui nobis? 
        </p>

      <Container className="skills" >

        <Row className="g-3" >

        <Col className="skills-dev-col" >

              <Col >
                <img src="src/images/designerIcon.png" style={{width: "120px"}}/>
              </Col >

              <Col className="skills-dev-col-1" >
                Developer
              </Col >

              <Col style={{backgroundColor: "purple"}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime harum corrupti et rerum omnis sed error deleniti similique. Necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium? Lorem50
              </Col>

              <Col className="skills-dev-col-2">
                <Col>
                <span style={{color: "pink"}}>Languages I speak:</span>
                  <Col>
                    HTML, CSS, Javascript, JSX Sass, Git, Bootstrap
                  </Col>
                </Col>

                <Col  className="skills-dev-col-3">
                  Dev Tools:
                  <ul style={{listStyle: "none"}}>
                    <li>Bootstrap</li>
                    <li>Github</li>
                    <li>VS Code</li>
                    <li>Framer Motion</li>
                  </ul>
                </Col>
              </Col>
        
        </Col>

        <Col className="skills-des-col">

        <Col className="skills-des-col-row1">

                <img src="src/images/designerIcon.png" style={{width: "200px"}}/>
              </Col >

              <Col style={{backgroundColor: "black"}}>
                Designer
              </Col >

              <Col  style={{backgroundColor: "green"}}>
                <Col>What I do:
                
                  <Col>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, at?
                  </Col>
                </Col>
              </Col>
        
        </Col>

        </Row>
      </Container>



      {/* Arrow HERE */}
      <Row 
        style={{marginTop: "20px",
        display: "inline-block",
        backgroundColor: "black"}}
        >
         FSAFASF
         {/* <FontAwesomeIcon icon={faChevronDown} /> */}
        
      </Row>
      {/* Arrow HERE */}
    

    <Container>
    <motion.div
        initial ={{scale: 1.2, y: 10}}
        animate={{scale:1, y: 0}}
        transition={{ease: "linear"}}
        className="imgexp"
    >
    < img src="src/images/01G1.png" style={{width: "200px"}}/>
    </motion.div>

      <TransitionText style={{marginTop: "20px"}}>
          <div className="about-me-section">
            
          
          <div className="about-me-section-container-body">

            <Row>
            <h1>My Experiences</h1>
            </Row>


            <Row>

              <Col className="Col">            
                <section>
                  <Col>
                  <h2>Self learn Web Developer</h2>
                  </Col>
                  <h3>2023 - Present {'\u00B7'} <YearTotal yearThen = {2023} yearAfter={2024}/> years </h3>
                    <ul>
                      <li>Learn the whole world about web design.</li>
                      <li>Targeting to become offical Full Stack developer at the height of my career.</li>
                    </ul>
                </section>
                </Col>

            </Row>

            <Row>
                <Col className="Col">
                <section>
                <Col>
                  <h2>Graphic Designer / Video Editor / Motion Graphic</h2>
                  <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2021} yearAfter={2024}/> years </h3>
                </Col>
                    <ul>
                      <li>Create digital content.</li>
                      <li>Collaborate with clients or project managers.</li>
                    </ul>
                </section>
                </Col>
          </Row>
               
          <Row>
                <Col className="Col">
                  <section>
                    <h2>Career Break</h2>
                    <h3>2020 - 2021 {'\u00B7'} <YearTotal yearThen = {2020} yearAfter={2021}/> year </h3>
                    <ul>
                      <li>Opened my first ever agriculture company.</li>
                    </ul>
                  </section>
                  </Col>
          </Row>

          <Row>

                  <Col className="Col">
                  <section>
                    <h2>Graphic Designer</h2>
                    <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                    <ul>
                      <li>Design visually appealing graphics.</li>
                    </ul>
                  </section>
                  </Col>

          </Row>
          </div>
        
          </div>
      </TransitionText>
      </Container>
    </div>

   );
}
 
export default AboutMe;