import React, { createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
state={
    isDarkTheme :true,
    darkTheme :{
        text:'#fff',
        background:'#5c5c5c'
    },
    lightTheme :{
        text:'#000000',
        background:'#d8ddf1'
    }

};
changeTheme=()=>{
    this.setState({isDarkTheme: !this.state.isDarkTheme});
}

render(){
    return(
        <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
    )
}

}
export default ThemeContextProvider;
