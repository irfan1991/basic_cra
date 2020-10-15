Aturan main hook
1. Hook hanya boleh dipanggil pada top level function 
2. Hook harus dipanggil dari fungsi komponen / custome hook

useState
useRef

let [counter,setCounter] = userState(0)
let counter = useRef(0)

//akses state 
console.log(counter)

// akses useRef
console.log(counter.current)


// updatestate
setCounter(counter + 1)

// update useRef
counterRef.current = counterRef.current + 1


kapan pakai useRef
1. integrasi third party yg gak ada reactnya 
2. Akses ke dom manual 
3. kalau akses method komponen uyg dibuat dg class dari parent 
4. animasi imperative 

useEffect
- akses web api
- catat log
- memanggil settimeout() didlam fungsi
- sisipin item baru ke dalam array di luar argument fungsi

tdk pure ---> useEffect
let total = 0

fungsi jumlah(number) {
    total = total + number;
    return total;
}


jumlah(3)
jumlah(3)


pure
function jumlah(a, b){
    return a+ b
}

jumlah(3,4)
jumlah(3,4)

const Editing = () => {

    let [text, setText] = useState("")

    useEffect(function(){
            if (text.length) localStorege.setItem("edit-text",text);
    });

  useEffect(function(){
            setText(localStorege.getItem("edit-text"));
    }, []);

    return <TextArea  type="text" value={text} 
    onChange={e => setText(e.target.value)}
    />
}


useEffect(fn, deps)

<Editing value="edit disini" />

urutan useEffect
- render
- effect dijalankan
- kalau ada state dijadikan dependency berubah
- re render
- function clean up dijalankan
- efect dijalankan log

prinsip react-hook /exhaustive-deps menggunakan state yang ada dalam effect pada deps 

useCallback ==> identify tidak berubah setiap render selalau sama
useMemo 
useReducer 
useContext memungkinkan memanggil data tidak melalui props dan bersifat global
user authrntication, theme
alur kerja useContext
- definisikan context dg data
- brodcast agar contxt tersedia di komponen
- kita menggunakan nilai context child 

useLayoutEffect
sama dengan useEffect beda kalau dia setelah peruahan dom parameter sama ada dua 
- fungsi
- depedensi
bisa untuk menghitung nilau DOM Setelah diupdate misalnya nangkap viewport atau lebar halaman

custome hook
bikin hook sendiri
syaratnya diawali dengan kata use misal useToogle useKamu

function useToogle = function(){
    const [value , toggle ] = useState("OFF);

    return [value, toggle];
}


React Router
KOmponennya 
1. ROUTER
<BrowserRouter>
<HashRouter > http://example..com/#/page

2. ROUTER MATCHER
<Swicth>
     <Route exact path="/">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
</Swicth>

3. NAVIGATION
LINK {anchor}, NAVLINK, REDIRECT

useRouteMatch
- path 
url
isExact
params

REACT ROUTER
Pasing konten pada Router
 <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/" children={Home} />
        <Route exact path="/" children={() => <Home />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => (<div>Halaman Utama</div>)} />

KOmponen Prompt
<Prompt when={formEmpty} message="Are ready ? " />

Dynamic Routing
/post/1
/post/2

/post/hello-world
/post/intro-resct

<Swicth>
    <Route path="/post/1">
        <Post id='1' />
    </Route>
    <Route path="/post/2">
        <Post id='2' />
    </Route>
    <Route path="/post/3">
        <Post id='3' />
    </Route>
</Swicth>







