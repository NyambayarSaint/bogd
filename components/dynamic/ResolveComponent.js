import React, { lazy, useEffect, useState } from 'react';

const importComponent = Name => lazy(()=>import(`../${Name}`));

const ResolveComponent = ({data}) => {

    const [views, setViews] = useState([]);

    useEffect(()=>{
        async function loadViews(){
            const componentPromises = data.map(async (el,i) => {
                console.log(el,'yey')
                const Comp = await importComponent(sanitizeComponentName(el.__component));
                return el.Spacing ?
                <div style={{marginTop:el.Spacing.MarginTop, marginBottom:el.Spacing.MarginBottom}}><Comp key={'cmp'+i} data={el}/></div>
                :
                <Comp key={'cmp'+i} data={el}/>
            });
            Promise.all(componentPromises).then((res)=>setViews(res));
        }
        loadViews()
    },[data]);

    return (
        <React.Suspense fallback="Loading views...">
            {views}
        </React.Suspense>
    );
};

export default ResolveComponent;

const sanitizeComponentName = (name) => {
    let final = name.slice(name.indexOf(".")+1, name.length).replace(/-/g, '');
    return capitalizeFirstLetter(final)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}