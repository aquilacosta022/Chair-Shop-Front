import React from "react";
import { Link, Route, Switch} from "react-router-dom";
import Products from "../Products/products"

const Routes = () => {
    return <div>
        <Switch>
            <link path="/test" exact>
              <Products/>        
                </link> 
        </Switch>
        
    </div>
}

export default Routes;