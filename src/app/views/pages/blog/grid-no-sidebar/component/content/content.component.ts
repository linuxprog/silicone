import { Component } from '@angular/core';
import { getSupabaseBackend } from '@core/services/supabaseAuthBackend';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'grid-no-sidebar-content',
  standalone: true,
  templateUrl: './content.component.html',
  styles: [],
  imports: [CommonModule], // Add CommonModule here
})
export class ContentComponent {
  gridNosidebarblogData: any[] = []; // Store the fetched ads data
  currentPage: number = 1; // Start on the first page
  pageSize: number = 10; // Number of ads per page
  totalAds: number = 0; // Total number of ads, to calculate total pages

  ngOnInit(): void {
    console.log('Fetching Facebook Ads Data...');
    this.fetchFacebookAds(this.currentPage);
  }

  // Method to fetch ads with pagination
  async fetchFacebookAds(page: number) {
    const start = (page - 1) * this.pageSize;
    const { data, error, count } = await getSupabaseBackend()?.supabase
      .from('facebook_ads')
      .select('*', { count: 'exact' }) // Select all columns and get total count
      .order('id', { ascending: false }) // Order by 'creation_time' in descending order
      .range(start, start + this.pageSize - 1); // Fetch data for the current page
  
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      this.gridNosidebarblogData = data; // Assign the fetched data to your view
      this.totalAds = count || 0; // Store the total number of ads for pagination
    }
  }
  

  // Method to handle page change
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.totalPages()) {
      this.currentPage = newPage;
      this.fetchFacebookAds(newPage);
    }
  }

  // Calculate the total number of pages
  totalPages(): number {
    return Math.ceil(this.totalAds / this.pageSize);
  }

  saveAd(ad: any) {
    console.log('Saving ad to favorites:', ad);
    // Implement logic to save the ad in the favorites list (localStorage or Supabase)
  }
  
}
