import { Component } from '@angular/core';

@Component({
  selector: 'app-account-benefits',
  templateUrl: './account-benefits.component.html',
  styleUrls: ['./account-benefits.component.scss'],
})
export class AccountBenefitsComponent {
  items = [
    {
      icon: 'sentiment_satisfied_alt',
      title: 'Portabilidade de salário',
      description: 'Solicite a portabilidade do seu salário e receba todo mês direto na conta do Bitwise.',
    },
    {
      icon: 'receipt',
      title: 'Pagamento de boletos',
      description: 'Pague contas de água, luz, telefone e compras com o saldo da sua conta.',
    },
    {
      icon: 'savings',
      title: 'Investimentos',
      description: 'Tenha acesso a Renda fixa, Fundos de investimentos, Home broker e outros.',
    },
    {
      icon: 'payments',
      title: 'Empréstimo e financiamento imobiliário',
      description: 'Solicite um empréstimo do seu jeito e de forma simples, segura e transparente.',
    },
    {
      icon: 'home',
      title: 'Seguros',
      description: 'Seguro residencial, automotivo, odonto e mais. Tenha seguro para a sua família, seu dinheiro e sua saúde.',
    },
    {
      icon: 'compare_arrows',
      title: 'Transferências gratuitas',
      description: 'Receba e envie dinheiro para qualquer banco, de forma ilimitada e sem custo.',
    },
  ];
}
