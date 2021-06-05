import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateMomentUtils from '@date-io/moment';
import {
    // DatePicker,
    // TimePicker,
  DateTimePicker,
  KeyboardDateTimePicker
//   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        //  itemdt:selectedDate,
        completed: false,
      });
      setTodo("");
    }
  };
  // console.log(selectedDate._d)
  
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
    
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        {/* <DateTimePicker
            variant="inline"
            label="Basic example"
            value={selectedDate}
            onChange={handleDateChange}
        /> */}
        <DateTimePicker
        autoOk
        ampm={false}
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
        label="24h clock"
      />
      </MuiPickersUtilsProvider>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      
      
      
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);