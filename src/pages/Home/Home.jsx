import {MainText, Text } from './Home.styled';

const Home = () => {
  return (
    <>
      <MainText>Welcome! </MainText>
      <Text>
        This is my first React application with the usage of Redux and other 
        libraries.
      </Text>
      <Text>
        It's a simple app when you can save your contacts in
        one place, delete them, or edit them. 
      </Text>
      <Text>
        It has the functionality of registration, login and logout of users.
      </Text>
    </>
  );
};

export default Home;
