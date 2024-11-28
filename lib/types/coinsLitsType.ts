export interface Coin {
    id: string; // شناسه‌ی یکتا
    symbol: string; // نماد ارز
    name: string; // نام ارز
    image: string; // لینک تصویر
    current_price: number; // قیمت فعلی
    market_cap: number; // ارزش کل بازار
    market_cap_rank: number; // رتبه بازار
    fully_diluted_valuation: number | null; // ارزش بازار با در نظر گرفتن عرضه کامل
    total_volume: number; // حجم کل معامله‌شده
    high_24h: number; // بالاترین قیمت در 24 ساعت
    low_24h: number; // پایین‌ترین قیمت در 24 ساعت
    price_change_24h: number; // تغییر قیمت در 24 ساعت
    price_change_percentage_24h: number; // درصد تغییر قیمت در 24 ساعت
    market_cap_change_24h: number; // تغییر ارزش بازار در 24 ساعت
    market_cap_change_percentage_24h: number; // درصد تغییر ارزش بازار در 24 ساعت
    circulating_supply: number; // عرضه در گردش
    total_supply: number | null; // عرضه کل
    max_supply: number | null; // حداکثر عرضه
    ath: number; // بالاترین قیمت تاریخ
    ath_change_percentage: number; // درصد تغییر از بالاترین قیمت تاریخ
    ath_date: string; // تاریخ بالاترین قیمت
    atl: number; // پایین‌ترین قیمت تاریخ
    atl_change_percentage: number; // درصد تغییر از پایین‌ترین قیمت تاریخ
    atl_date: string; // تاریخ پایین‌ترین قیمت
    roi: null | {
      times: number; // تعداد دفعات رشد
      currency: string; // واحد پول
      percentage: number; // درصد بازگشت سرمایه
    }; // بازگشت سرمایه (ممکن است مقدار null باشد)
    last_updated: string; // آخرین به‌روزرسانی
  }