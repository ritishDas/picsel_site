import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import useDays from "../hooks/daydiff";
export default function(props){
  const navigate = useNavigate();
  const days = useDays(props.date);
return(
<>
    <div onClick={()=>navigate(`/event/${props._id}`)} className = "event-card">
<img src ={props.poster}/>
    <div>
    <span>{props.name}</span>
    <span><b>Venue:</b><span>{props.venue}</span></span>
    <p>{days<0?"finished":`${days} days left`}</p>
    </div>
    </div>
 
  </>
);
}
