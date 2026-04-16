export type EarlyAccessPayload = {
  fullName: string;
  email: string;
  phone: string;
  preparationStage: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const tableName = import.meta.env.VITE_SUPABASE_EARLY_ACCESS_TABLE || "early_access_signups";

const getEndpoint = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${tableName}`;
};

export const saveEarlyAccessLead = async (payload: EarlyAccessPayload) => {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      full_name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      preparation_stage: payload.preparationStage,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Unable to save your early access request right now.");
  }
};
