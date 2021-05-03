const newEmployees = () => {
    const employees = {
      id1: employeesGen('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: employeesGen('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: employeesGen('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
  