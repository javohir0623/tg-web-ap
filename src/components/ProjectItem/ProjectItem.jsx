import React from 'react';
import Button from "../button/Button";
import './ProjectItem.css'
const ProjectItem = ({project, className, onAdd}) => {
    const onAddHandler = () => {
      onAdd(project);
    }
    return (
        <div className={'project' + className}>
            <div className={'img'}/>
            <div className={'title'}>{project.title}</div>
            <div className={'describtion'}>{project.describtion}</div>
            <div className={'price'}>
                <span>Narxi <b>{project.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}></Button>
                Ma'lumot olish
        </div>
    );
};

export default ProjectItem;