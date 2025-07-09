import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardInfo } from '../../components/CardInfo';
import { CardSelector } from '../../components/CardSelector';
import { NavBar } from '../../components/NavBar';
import ServiceItemCard from '../../components/ServiceItemCard';
import { styles } from './styles';
import DinheiroIcon from '../../assets/icons/ic_dinheiro.svg';
import FuncionarioIcon from '../../assets/icons/ic_equipe.svg';
import TesouraIcon from '../../assets/icons/ic_Relogio.svg';

const PERIOD_OPTIONS = ['Este mês', 'Mês passado', 'Últimos 7 dias', 'Hoje'];
const EMPLOYEE_OPTIONS = ['Todos', 'Carlos Oliveira', 'Mariana Silva'];
const SERVICE_TYPE_OPTIONS = ['Todos', 'Corte', 'Coloração', 'Barba'];

const DADOS_SERVICOS_DB = [
  { id: '1', nome: 'Coloração', funcionario: 'Mariana Silva', cliente: 'Cliente A', preco: 70.00, data: '02/05/2025 17:15' },
  { id: '2', nome: 'Corte', funcionario: 'Carlos Oliveira', cliente: 'Cliente B', preco: 35.00, data: '02/05/2025 13:00' },
  { id: '3', nome: 'Corte', funcionario: 'Carlos Oliveira', cliente: 'Cliente C', preco: 35.00, data: '02/05/2025 10:30' },
  { id: '4', nome: 'Barba', funcionario: 'Mariana Silva', cliente: 'Cliente D', preco: 30.00, data: '01/05/2025 16:00' },
];

const getComissaoPorPeriodo = (periodo: string): string => {
  console.log(`Buscando comissão para o período: ${periodo}`);
  if (periodo === 'Este mês') return 'R$ 3.850,00';
  if (periodo === 'Mês passado') return 'R$ 7.200,50';
  return 'R$ 950,00';
};

const getComissaoPorFuncionario = (funcionario: string): string => {
  console.log(`Buscando comissão para o funcionário: ${funcionario}`);
  if (funcionario === 'Todos') return 'R$ 3.850,00';
  if (funcionario === 'Carlos Oliveira') return 'R$ 1.950,00';
  if (funcionario === 'Mariana Silva') return 'R$ 1.900,00';
  return 'R$ 0,00';
};

const getTotalPorServico = (servico: string): string => {
  console.log(`Buscando total para o serviço: ${servico}`);
  if (servico === 'Todos') return 'R$ 3.850,00';
  if (servico === 'Corte') return 'R$ 1.200,00';
  if (servico === 'Coloração') return 'R$ 2.150,00';
  return 'R$ 500,00';
};

export default function Home() {
  const navigation = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState(PERIOD_OPTIONS[0]);
  const [commissionByPeriod, setCommissionByPeriod] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(EMPLOYEE_OPTIONS[0]);
  const [commissionByEmployee, setCommissionByEmployee] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICE_TYPE_OPTIONS[0]);
  const [totalByService, setTotalByService] = useState('');
  const [employeeCount, setEmployeeCount] = useState('0');
  const [serviceTypeCount, setServiceTypeCount] = useState('0');
  const [recentServices, setRecentServices] = useState(DADOS_SERVICOS_DB);

  useEffect(() => {
    setEmployeeCount(EMPLOYEE_OPTIONS.length.toString());
    setServiceTypeCount(SERVICE_TYPE_OPTIONS.length.toString());
  }, []);

  useEffect(() => {
    const newValue = getComissaoPorPeriodo(selectedPeriod);
    setCommissionByPeriod(newValue);
  }, [selectedPeriod]);

  useEffect(() => {
    const newValue = getComissaoPorFuncionario(selectedEmployee);
    setCommissionByEmployee(newValue);
  }, [selectedEmployee]);

  useEffect(() => {
    const newValue = getTotalPorServico(selectedService);
    setTotalByService(newValue);
  }, [selectedService]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/images/img_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Barbearia</Text>
        <View style={{ width: '100%', gap: 16 }}>
          <CardSelector
            selectorLabel="Período"
            options={PERIOD_OPTIONS}
            initialSelectedOption={selectedPeriod}
            onSelect={setSelectedPeriod}
            icon={DinheiroIcon}
            valueLabel="Total Faturado no Período"
            value={commissionByPeriod}
            iconColor='#61b265'
          />
          <CardSelector
            selectorLabel="Funcionário"
            options={EMPLOYEE_OPTIONS}
            initialSelectedOption={selectedEmployee}
            onSelect={setSelectedEmployee}
            icon={FuncionarioIcon}
            valueLabel="Comissão do Funcionário"
            value={commissionByEmployee}
            iconColor='#3498db'
          />
          <CardSelector
            selectorLabel="Serviço"
            options={SERVICE_TYPE_OPTIONS}
            initialSelectedOption={selectedService}
            onSelect={setSelectedService}
            icon={TesouraIcon}
            valueLabel="Total por Serviço"
            value={totalByService}
            iconColor='#e74c3c'
          />
          <CardInfo
            label="Funcionários Ativos"
            value={employeeCount}
            icon={FuncionarioIcon}
            iconColor='#3498db'
          />
          <CardInfo
            label="Tipos de Serviços"
            value={serviceTypeCount}
            icon={TesouraIcon}
            iconColor='#e74c3c'
          />
        </View>
        
        <Text style={styles.tituloSecao}>Serviços Recentes</Text>
        <View style={styles.servicesGrid}>
          {recentServices.map((servico) => (
            <ServiceItemCard key={servico.id} data={servico} />
          ))}
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('ServicePerformed')}>
          <Text style={styles.verTodos}>Ver todos →</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}