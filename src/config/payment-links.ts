/**
 * Stripe決済リンク設定
 * 
 * このファイルはStripeの決済リンクを管理するための設定ファイルです。
 * 各プランの月額・年額のURLを格納しています。
 * 
 * 使用方法:
 * import { paymentLinks } from '@/config/payment-links';
 * const basicMonthlyLink = paymentLinks.basic.monthly;
 */

export const paymentLinks = {
  // サポータープラン（ベーシック）
  basic: {
    monthly: 'https://buy.stripe.com/test_cN2bKZ84ycEy8Bq7ss',
    yearly: 'https://buy.stripe.com/test_dR65mBfx08oi5peeUV',
  },
  
  // プロサポータープラン
  pro: {
    monthly: 'https://buy.stripe.com/test_5kA02h98C4823h6eUW',
    yearly: 'https://buy.stripe.com/test_6oE16l98C0VQeZO28b',
  },
  
  // ビジネスサポータープラン
  business: {
    monthly: 'https://buy.stripe.com/test_9AQcP3esW0VQ18YbIM',
    yearly: 'https://buy.stripe.com/test_9AQcP34Sm5c6cRG7sx',
  },
  
  // パートナープラン
  partner: {
    monthly: 'https://buy.stripe.com/test_6oE8yN4Sm5c69FubIO',
    yearly: 'https://buy.stripe.com/test_dR616l98C8oi3h63cj',
  },
};