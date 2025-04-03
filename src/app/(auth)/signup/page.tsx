'use server';
import { tempService } from '@/actions/signup-service';
import { Button } from '@/components/ui/button';
import PolicyAgreementPage from '@/components/pages/auth/signup/PolicyAgreementPage';
export default async function Signup() {
  return (
    <main>
      <form action={tempService}>
        <PolicyAgreementPage />
        <Button type="submit" />
      </form>
    </main>
  );
}
