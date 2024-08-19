import { useState } from "react";

//import "./App.css";
import "./TextTornado.css";
import { GiFlowerEmblem } from "react-icons/gi";

let spam: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nulla, ullamcorper et risus nec, feugiat condimentum mauris. Nulla ornare ligula enim, fermentum sagittis eros mollis non. Ut id ultrices nisl. Phasellus et est sed massa interdum iaculis ut ut turpis. Quisque ac congue arcu. Proin pretium volutpat justo, vel sodales neque feugiat et. Duis vitae blandit ante. Aenean scelerisque tempor massa sit amet auctor. Ut vitae erat quis magna tincidunt consequat. Mauris faucibus congue congue. Pellentesque risus nibh, tempor non nulla quis, dictum gravida purus. Vestibulum euismod leo est, vitae vehicula eros vehicula vitae. Donec convallis vel arcu non laoreet. Maecenas ut lectus eget metus vulputate egestas. Duis pharetra purus eget augue convallis, id convallis dolor scelerisque. Integer sapien nulla, varius eget lobortis sit amet, congue in diam.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam semper, velit sit amet pulvinar ultricies, enim turpis consequat augue, sit amet consectetur justo nibh et lacus. Sed aliquet orci vel felis bibendum, eu dictum turpis finibus. Pellentesque commodo sit amet sem a feugiat. Ut id imperdiet eros. Vestibulum scelerisque eget felis non consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla fermentum blandit justo, sit amet sollicitudin enim hendrerit nec. Nam magna nulla, vulputate at cursus accumsan, vulputate sagittis sapien. Nam sit amet odio justo.

Cras fermentum metus eget leo ullamcorper ultricies. Etiam tristique finibus arcu, sed volutpat metus fermentum a. Phasellus mollis faucibus dolor vitae feugiat. Curabitur ornare ligula lacinia ipsum maximus venenatis. Morbi congue, enim ac vestibulum pulvinar, nisl odio volutpat velit, nec sodales ligula mi ac dolor. Nullam aliquet, tortor sed posuere volutpat, metus ligula vulputate nisl, sed imperdiet est ipsum et lacus. Cras ut sagittis mauris, pretium vulputate velit. Suspendisse potenti. In viverra, eros et aliquam fringilla, lorem augue ultricies ante, eu posuere urna purus at erat. Cras lobortis nisl ut lectus aliquet venenatis. Curabitur placerat lacinia venenatis. Suspendisse mattis, urna auctor sodales sagittis, mi urna ornare velit, et tristique velit ipsum sed risus. Sed volutpat quis nisi ut volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla vel diam dignissim, facilisis ante quis, tempor augue.

Morbi lobortis non justo eget sodales. In turpis nisl, congue in ante ac, placerat scelerisque justo. Nam euismod diam quis dolor ornare pretium. Aenean nisi libero, molestie eu est sed, fermentum ultrices tellus. Aliquam eget sagittis massa, in porttitor mauris. Morbi et ante sapien. Praesent faucibus purus velit, quis varius quam elementum vulputate. In elementum bibendum sem elementum commodo. Cras enim neque, ultrices ut lacinia at, hendrerit in justo. Praesent orci arcu, suscipit at pretium eu, lobortis non augue. Ut nulla lorem, aliquet a diam vitae, laoreet sollicitudin velit. In orci libero, hendrerit eu consectetur quis, vulputate sit amet nisi. Etiam nec nisi turpis. Praesent pharetra magna eget erat blandit egestas.

Nam venenatis viverra fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium nisi. Cras quis dui orci. Etiam iaculis placerat consequat. In at tempus ante. Maecenas maximus erat ullamcorper, finibus nibh at, tempus magna. Praesent eu metus tincidunt, imperdiet lacus eu, tincidunt ipsum. Duis lacinia egestas tellus at aliquam.

Vivamus dapibus urna id lorem molestie ullamcorper. Curabitur sagittis suscipit justo. Nullam convallis purus ac odio molestie sodales blandit eget dolor. In metus nisl, ultrices sit amet suscipit vel, sagittis sit amet metus. Vivamus lobortis maximus vehicula. Curabitur condimentum dolor in leo vestibulum venenatis. Mauris sit amet hendrerit purus, vel auctor elit. Integer ullamcorper ultricies egestas. Aenean sagittis purus lacus, at fringilla ex fringilla eu. Nullam iaculis diam magna, sed interdum nibh posuere a. Etiam vulputate est eget eros elementum dictum. Ut eget velit sem. Cras mattis facilisis massa, sodales varius dolor cursus ac. Cras mattis lacinia nunc, vel ultrices est finibus at. Morbi sed nulla eget odio efficitur rhoncus. Praesent ut rhoncus dolor.

Aliquam commodo tristique est. Pellentesque commodo nec ante eget maximus. Donec eget porta orci. Proin finibus enim in neque pellentesque, vitae bibendum eros tempus. Sed accumsan, augue sit amet cursus cursus, risus ex volutpat ex, et hendrerit neque purus sit amet magna. Suspendisse eget purus ac mauris dictum condimentum at at ex. Donec nec efficitur enim, at vehicula ipsum. In finibus justo eget lectus vehicula, vel aliquam odio sodales. Duis ornare sagittis mauris, ac finibus tortor venenatis a. Aliquam vel nibh aliquam, rutrum magna sit amet, gravida ex. Cras eget ultricies mi. In iaculis eros nisl, et malesuada est convallis vitae. Etiam luctus tortor sollicitudin dui luctus mattis. Sed efficitur rutrum vulputate. Sed in felis aliquam nulla tristique consectetur eget non tellus.

Mauris commodo ipsum et elit commodo pellentesque. Proin quis leo sed ex laoreet consectetur. Aenean vel nibh eget mi molestie lobortis. Fusce vel mauris ornare, rutrum metus at, egestas ipsum. Sed et semper erat, non aliquam diam. Sed ut mattis eros. Morbi sagittis ante sit amet nisl imperdiet, vitae interdum dolor maximus. Proin vel eros eget magna scelerisque consectetur. Proin et est venenatis, dignissim dui in, fringilla lacus. Cras nec vestibulum nisi. Sed libero nibh, placerat ac purus non, eleifend vehicula neque.

Donec id justo metus. Sed fringilla commodo mi eget dignissim. Sed accumsan rutrum blandit. Sed venenatis tincidunt felis non vestibulum. Quisque in est quis lacus molestie semper vitae nec nibh. Pellentesque non lacus molestie, elementum nulla in, feugiat lorem. Vivamus consequat diam a tortor tincidunt faucibus.

Aliquam posuere purus ut nulla suscipit efficitur at eget massa. Sed a lectus erat. Nunc vehicula felis vel semper vestibulum. Nunc ornare massa ac sapien ultricies, et volutpat enim ultrices. In nec risus eget ante pharetra auctor eget ac felis. Donec rutrum at arcu ac dapibus. Vestibulum vitae mollis est, at eleifend enim. Aenean efficitur tellus quis dui facilisis congue. Cras laoreet auctor justo eget lacinia. Nunc urna metus, tristique ac nibh et, convallis sodales ante. Nulla pretium pharetra sapien vitae aliquam.

Quisque vehicula scelerisque mollis. Nullam gravida interdum mauris ac efficitur. Suspendisse orci ante, maximus in congue in, porta et odio. Donec ipsum lorem, rhoncus a dolor non, auctor mattis est. Pellentesque eget dui eget enim semper finibus nec a neque. In vel pharetra nisi. Quisque laoreet, ante a commodo laoreet, sapien lectus efficitur quam, non placerat odio mi non neque. Praesent quis sodales purus. Aliquam eu sagittis nunc. Fusce mauris lectus, ultricies eget ultricies eget, blandit at lorem. Nullam varius sollicitudin orci a porttitor. Ut in nunc nec magna dignissim dignissim id id magna. Sed finibus ac ipsum ut volutpat.

Nunc nec sodales ex. Vestibulum sodales diam massa, suscipit lacinia nisl finibus at. Aenean auctor nec velit eu bibendum. Ut suscipit blandit dolor, quis suscipit est molestie in. Vivamus efficitur tristique metus, quis euismod lorem mattis at. Quisque mattis aliquet fringilla. Aliquam vitae congue risus. Fusce lectus dui, sodales a lacinia in, iaculis ut risus. Proin ut consequat eros, a suscipit tortor. In ornare turpis justo, vel euismod urna cursus et.

Sed sed lobortis mi. Aenean lacinia sed ipsum facilisis placerat. Nam ac arcu scelerisque, finibus dui commodo, consequat quam. Sed quis luctus odio. Integer vel velit ultrices, feugiat lectus nec, pretium nisl. Praesent fringilla diam quis tellus mattis, vel faucibus mi egestas. Donec gravida augue purus. Mauris odio turpis, dignissim vulputate tellus a, mollis lobortis lectus. Vestibulum elementum nulla condimentum magna dictum mattis sit amet sed velit. Sed sagittis finibus dapibus. Pellentesque venenatis magna elit, et scelerisque arcu tincidunt at. Vivamus a semper lacus, commodo malesuada velit. Maecenas tellus ligula, egestas eget ligula eget, mattis aliquet diam. Curabitur at enim id metus gravida convallis id in dui.

Vivamus sed volutpat dui, quis auctor nulla. Nullam finibus maximus mauris, eget laoreet eros pharetra non. Fusce egestas, magna et sollicitudin convallis, arcu nibh gravida ex, ac ultrices dui ante sed risus. Nulla et arcu vestibulum, gravida neque vitae, dapibus arcu. Vivamus commodo scelerisque lorem, ut consequat lectus auctor et. Etiam sed orci pulvinar, ornare libero id, commodo elit. Nunc consequat libero quis volutpat viverra. Curabitur in massa eget nulla blandit pulvinar vel sit amet turpis.

Donec non dapibus purus. Phasellus id magna eu odio tincidunt pretium et at nunc. Etiam placerat luctus mauris eu lacinia. Integer tincidunt ornare condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam gravida luctus odio, quis mattis ante fringilla sed. Proin vitae justo non sem egestas consectetur et vel quam. Donec sit amet erat convallis, fermentum augue vitae, viverra ligula. Vestibulum varius diam in enim pellentesque finibus non et mauris. Fusce eu ultricies risus. Aliquam eu sem vestibulum, pellentesque sapien sit amet, ullamcorper mauris. Praesent pellentesque eu est non porttitor. Mauris suscipit lorem nec finibus rutrum. Phasellus sit amet libero eu ligula mattis eleifend quis quis enim. Sed vitae diam id sem facilisis iaculis vel vitae arcu. Quisque volutpat placerat arcu sed vulputate.`;
function App() {
  const [rant, setRant] = useState(localStorage.getItem(`rants`) || spam);
  const [words, setWords] = useState("");
  //  const [animation, setAnimation] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [animationStyle, setAnimationStyle] = useState({});
  const [helped,setHelped] = useState(localStorage.getItem(`helped`) === null ? 0 : parseInt(localStorage.getItem("helped")))
  const [liked,setLiked] = useState(false)
  const handleSpace = (e: any) => {
    if (e.key === "." || words.split(" ").length >= 9 || e.key === "Enter") {
      let newRant = rant + " " + e.target.value;

      setRant(newRant);
      spam = spam + " " + e.target.value;
      setAnimatedText(e.target.value);

      localStorage.setItem(`rants`, newRant);
      // Start animation
      setAnimationStyle({
        opacity: 1,
        transform: "translateY(0px)",
      });
      // Animate upwards
      var bool = Math.random() * 2 - 1;
      setTimeout(() => {
        setAnimationStyle({
          opacity: 0,
          transform: `translateY(${
            Math.floor(Math.random() * 400 * bool) + 300 * bool
          }px) rotate(${Math.floor(
            (Math.random() * 2 - 1) * Math.random() * 30
          )}deg) `,
          transition: "all 2s ease-out ",
          //  transitionDelay:"4s"
        });
      }, 100);
      setWords("");
      // Reset
      setTimeout(() => {
        setAnimatedText("");
        setAnimationStyle({});
      }, 1050);
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
        maxHeight: "100vh",
        background: "#fff",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          maxHeight: "100%",
          overflow: "hidden",
          display: "flex",
          zIndex: "1",
          height: "100%",
        }}
      >
        <p style={{ color: "#A393BF" }}>
          {spam} {spam} {spam} {spam}
          {rant}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          width: "50%",
          //   border: "2px solid red",
          display: "flex",
          alignSelf: "baseline",
          //justifySelf: "center",
          marginTop: "-2%",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: "1000000000",
        }}
      >
        <textarea
          //  type="text"
          value={words}
          onKeyDown={handleSpace}
          onChange={(e) => setWords(e.target.value)}
          placeholder="rant away and press enter to send into the void"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ccc",
            borderRadius: "5px",
            position: "absolute",
            bottom: "200px",
            backgroundColor: "#5F4B66",
            color: "#fff",
            fontStyle: "italic",
            height: "auto",
            alignSelf: "center",
            justifySelf: "center",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: `1%`,
            bottom: "200px",
            // marginTop:"900px",
            transform: "translateX(-50%)",
            // textAlign: "center",
            color: "#5F4B66",
            fontSize: "15px",
            fontWeight: "bold",
            whiteSpace: "nowrap",

            ...animationStyle,
          }}
        >
          {animatedText}
        </div>
      </div>
      <div
        style={{
          //   border:" 2px solid red",
        //  width: "50px",
          marginLeft: "auto",
              backgroundColor:"white",
          zIndex: "10000000",
          position:"relative",
          fontSize: 12
        }}
        >
        <GiFlowerEmblem
          size={30}
          color={`${liked? "purple":"grey"}`}
          onClick={()=>{
            setLiked((prev)=>!prev)
            setHelped((prev)=> liked ?prev -1: prev+1)
            localStorage.setItem(`helped`,JSON.stringify(helped+1))
          }}
          style={{
            transform: `rotate(${liked ? 360 : 0}deg)`      ,
            transition: liked ? "all 1s ease-out ":"all 2s ease-out" ,
            
          }}
          />
            {helped}
        
      </div>
    </div>
  );
}

export default App;
