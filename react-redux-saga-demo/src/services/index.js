const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
export const stores = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  console.log(moduleName, value)

  modules[moduleName] = value[moduleName] || value.default
  return modules
}, {})


export function login({user,ps}){
	return new Promise((resolve, reject)=>{
		setTimeout(function(){
			
			if(user == "zs" && ps == "123456"){
				resolve("success");

			}else{
				reject("fail")
			}
			
		},330)
	})
	
}
export function login2({user,ps}){
	return new Promise((resolve, reject)=>{
		setTimeout(function(){
			
			if(user == "zs" && ps == "123456"){
				resolve("success");
				console.log(login2.name)
			}else{
				reject("fail")
			}
			
		},630)
	})
	
}