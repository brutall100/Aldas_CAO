import Counter from '../Counter';
import ToggleButton from '../ToggleButton';
import InputField from '../InputField';
import MultipleCounters from '../MultipleCounters';
import UserForm from '../UserForm';
import TaskList from '../TaskList';
import ParentComponent from '../ParentComponent';
import ParentComponentA from '../ParentComponentA';
import ParentComponentB from '../ParentComponentB';


const Header = () => {
    return (
        <>
        <Counter />
        <ToggleButton />
        <InputField />
        <MultipleCounters />
        <UserForm />
        <TaskList />
        <ParentComponent />
        <ParentComponentA />
        <ParentComponentB />
        </>
    );
    }

export default Header;