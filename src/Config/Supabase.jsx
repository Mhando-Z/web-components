import { createClient } from "@supabase/supabase-js";

// First Supabase project (Account 1)
const supabaseUrl1 = "https://cvherctwrqdsaxgjftay.supabase.co";
const supabaseKey1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aGVyY3R3cnFkc2F4Z2pmdGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MjM4MjIsImV4cCI6MjA0NDQ5OTgyMn0.bYEjOHwp_052jsxvl78lbXL6IpYhaBaXqQtOPiaGv6c";
const supabase1 = createClient(supabaseUrl1, supabaseKey1);

// Second Supabase project for Posale project (Account 2)
const supabaseUrl2 = "https://whnwsftcvlhmkjvtmwgp.supabase.co";
const supabaseKey2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobndzZnRjdmxobWtqdnRtd2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODA3MjYsImV4cCI6MjA2ODI1NjcyNn0.A3dugVFT06E3J437eDbirimUYbMsb3FVwBlzVNDhiBQ";

const supabase2 = createClient(supabaseUrl2, supabaseKey2);

// Second Supabase project for MakaziHub)
const supabaseUrl3 = "https://azbvtbwolxnqjttznnhe.supabase.co";
const supabaseKey3 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6YnZ0YndvbHhucWp0dHpubmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjQzNzEsImV4cCI6MjA2MDY0MDM3MX0.BY4F-JP_etYR_ISGz0yPO-LmLrG6nMeoXzsiHxocaug";

const supabase3 = createClient(supabaseUrl3, supabaseKey3);

// Second Supabase project for Crdbsacooss (Account 2)
const supabaseUrl4 = "https://imnfpvxhfjzjfiggcmua.supabase.co";
const supabaseKey4 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbmZwdnhoZmp6amZpZ2djbXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1Njk2MDgsImV4cCI6MjA1ODE0NTYwOH0.dz4Y7NjkcBitzRmmOpDVMc60mrQQrcm-DgUVUijlAb0";
const supabase4 = createClient(supabaseUrl4, supabaseKey4);

// First Supabase project (Account 1)
const supabaseUrl5 = "https://kxhkybvdnudbqxdhwzvv.supabase.co";
const supabaseKey5 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGt5YnZkbnVkYnF4ZGh3enZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjcwNjYsImV4cCI6MjA3NTcwMzA2Nn0.oRiPLMBSA6qs4VQHbqlseusRh9e5oaDNCtO762hv994";

const supabase5 = createClient(supabaseUrl5, supabaseKey5);
// Export them individually or as an object
export { supabase1, supabase2, supabase3, supabase4, supabase5 };
