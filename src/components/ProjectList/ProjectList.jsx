import React, {useState} from 'react';
import './ProjectList.css'
import ProjectItem from "../ProjectItem/ProjectItem";
import {useTelegram} from "../../hooks/useTelegram";

const projects = [
    {id: '1', title: '1-uy', price: 12, describtion: '-uy'},
    {id: '2', title: '2-uy', price: 32, describtion: '-uy'},
    {id: '3', title: '3-uy', price: 43, describtion: '-uy'},
    {id: '4', title: '4-uy', price: 54, describtion: '-uy'},
    {id: '5', title: '5-uy', price: 65, describtion: '-uy'},
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item)=>{
      return acc += item.price
  })
}
const ProjectList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (project) => {
        const alreadyAdded = addedItems.find(item => item.id === project.id);
        let newItems = [];
        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== project.id);
        }else {
            newItems = [...addedItems, project];
        }
        setAddedItems()

        if (newItems.length === 0){
            tg.MainButton.hide()
        }else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text:'Buy${getTotalPrice(newItems)}'
            })
        }
    }
    return (
        <div className={'list'}>
            {projects.map(item => (
                <ProjectItem
                    project={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProjectList;